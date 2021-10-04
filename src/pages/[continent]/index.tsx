import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import { Box } from '@chakra-ui/react';

import { getContinents } from '../../services/data';

import { SafeContentArea } from '../../components/SafeContentArea';
import { Banner } from './Banner';
import { Info } from './Info';

interface Continent {
	title: string;
	banner: string;
	description: string;
	countriesCount: number;
	languagesCount: number;
	citiesInTop100Count: number;
}

interface ContinentProps {
	continent: Continent;
}

export default function Continent({ continent }: ContinentProps) {
	return (
		<Box>
			<Head>
				<title>{continent.title} | worldtrip</title>
			</Head>

			<Banner title={continent.title} image={continent.banner} />

			<SafeContentArea>
				<Info
					description={continent.description}
					countriesCount={continent.languagesCount}
					languagesCount={continent.languagesCount}
					citiesInTop100Count={continent.citiesInTop100Count}
				/>
			</SafeContentArea>
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
	//obs: only europa has the complete data
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
