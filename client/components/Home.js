import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { css } from '@emotion/react';
import BounceLoader from 'react-spinners/BounceLoader';
import { useState } from 'react';

const Homes = () => {
	return (
		<main className="font-comfortaa text-white h-screen flex flex-col justify-center items-center">
			{/* <Image
				// loader={myLoader}
				src="/pancakes-2291908_1920.jpg"
				layout="fixed"
				width={1920}
				height={1000}
				alt="pancakes"
				className="absolute z-0"
			/> */}

			<img
				src="/pancakes-2291908_1920.jpg"
				style={{
					position: 'absolute',
					zIndex: '-1',
					filter: 'brightness(0.8)',
				}}
			/>
			<div className="h-1/3 w-full flex flex-col justify-center items-center">
				<h1 className="text-xl text-center md:text-2xl">
					Bienvenue sur a vos Crépes
				</h1>
				<h2 className="text-base text-center md:text-lg">
					pour commencé veuillez scanner le QR Code
				</h2>
			</div>
			<section className="h-2/3 w-full flex flex-col justify-start items-center">
				{/* <h2 className="mt-10 text-2xl md:text-xl">
					{ready ? 'Scannez votre Table' : 'Chargement...'}
				</h2> */}
				<div className="flex flex-col mt-10 shadow-lg items-center justify-center rounded-md overflow-hidden w-3/4">
					{
						<BounceLoader
							color={'#fff'}
							loading={true}
							css={css`
								display: flex;
							`}
							size={50}
						/>
					}
				</div>
			</section>
		</main>
	);
};

export default Homes;
