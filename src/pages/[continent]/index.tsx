import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import { Box } from '@chakra-ui/react';

import { getContinents } from '../../services/data';

interface Continent {
	id: string;
	title: string;
	subtitle: string;
	image: string;
	slug: string;
}

interface ContinentProps {
	continent: Continent;
}

export default function Continent({ continent }: ContinentProps) {
	console.log(continent);

	return (
		<Box>
			<Head>
				<title>{continent.title} | worldtrip</title>
			</Head>

			<div>{continent.subtitle}</div>
		</Box>
	);
}

export const getStaticPaths: GetStaticPaths = async () => {
	const continents = getContinents();

	const paths = continents.map((continent) => ({
		params: { continent: continent.slug },
	}));

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const continentData = getContinents({ slug: params.continent as string })[0];
	const europaData = getContinents({ id: 'europa' })[0];

	const continent = {
		...continentData,
		banner: europaData.banner,
		description: europaData.description,
		countriesCount: europaData.countriesCount,
		languagesCount: europaData.languagesCount,
		citiesInTop100Count: europaData.citiesInTop100Count,
		citiesInTop100: europaData.citiesInTop100,
	};

	return {
		props: {
			continent,
		},
	};
};
