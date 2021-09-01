import { Box, VStack } from '@chakra-ui/react';

import { SafeContentArea } from '../../components/SafeContentArea';
import { Banner } from './Banner';
import { ChooseContinentText } from './ChooseContinentText';
import { Divider } from './Divider';
import { TravelTypes } from './TravelTypes';

export default function Home() {
	return (
		<Box>
			<Banner />
			<TravelTypes mt="28" />
			<Divider mt="20" />
			<SafeContentArea maxW="1240px" mt="12" mb="10">
				<VStack spacing="12" align="center" justify="center">
					<ChooseContinentText />
				</VStack>
			</SafeContentArea>
		</Box>
	);
}
