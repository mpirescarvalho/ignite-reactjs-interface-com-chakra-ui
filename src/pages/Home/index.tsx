import { Box } from '@chakra-ui/react';

import { Banner } from './Banner';
import { TravelTypes } from './TravelTypes';

export default function Home() {
	return (
		<Box>
			<Banner />
			<TravelTypes mt="28" />
		</Box>
	);
}
