import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { useState } from 'react';

const client = () => {
	const [authToken, setAuthToken] = useState(
		process.env.NEXT_PUBLIC_LOCAL_TOKEN_API
	);
	const getHeader = () => {
		if (!authToken) return null;

		return {
			authorization: `Bearer ${authToken}`,
		};
	};

	const link = new HttpLink({
		uri: 'http://localhost:1337/graphql',
		// uri: `${process.env.NEXT_PUBLIC_HOST_STRAPI}/graphql`,
		headers: getHeader(),
	});

	return new ApolloClient({
		link,
		cache: new InMemoryCache(),
	});
};

export default client;
