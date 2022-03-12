import { buffer } from 'micro';

// Establish connection to Stripe

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const endpointSecret = process.env.STRIPE_SIGNING_SECRET;

// create a mutation to fulfillOrder

// const client = new ApolloClient({
// 	uri: `${process.env.HOST_BACKEND}`,
// 	cache: new InMemoryCache(),
// });

// const { data } = await client.query({
// 	mutation: gql`
//     mutation commandes(id: 300 is_payed: true total: 338 ) {
// 		data {
// 			id
// 			attributes {
// 				is_payed
// 				total
// 			}
// 		}
// 	}
// 	`,
// });

const fulfillOrder = (session) => {
	console.log(session);
};

export default async (req, res) => {
	if (req.method === 'POST') {
		const requestBuffer = await buffer(req);
		const payload = requestBuffer.toString();
		const sig = req.headers['stripe-signature'];

		let event;
		// Verify that the EVENT posted came from stripe
		try {
			event = stripe.webhooks.constructEvent(
				payload,
				sig,
				endpointSecret
			);
		} catch (err) {
			console.log('ERROR', err.message);
			return res.status(400).send(`Webhook error: ${err.message}`);
		}

		// Handle the checkout.session.completed event
		if (event.type === 'checkout.session.completed') {
			const session = event.data.object;

			// Fulfill the order
			return fulfillOrder(session).then(() =>
				res
					.status(200)
					.catch((err) =>
						res.status(400).send(`Webhook Error ${err.message}`)
					)
			);
		}
	}
};
export const config = {
	api: {
		bodyParser: false,
		externalResolver: true,
	},
};
