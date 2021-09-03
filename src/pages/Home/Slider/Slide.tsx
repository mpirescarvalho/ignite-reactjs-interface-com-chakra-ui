import { Text, VStack } from '@chakra-ui/layout';
import { SlideBackground } from './SlideBackground';

interface SlideProps {
	title: string;
	subtitle: string;
	backgroundSrc: string;
	backgroundAlt: string;
}

export function Slide({
	title,
	subtitle,
	backgroundSrc,
	backgroundAlt,
}: SlideProps) {
	return (
		<VStack spacing="4" w="100%" h="100%" align="center" justify="center">
			<SlideBackground src={backgroundSrc} alt={backgroundAlt} />

			<Text fontSize="5xl" fontWeight="bold" color="gray.100">
				{title}
			</Text>
			<Text fontSize="2xl" fontWeight="bold" color="gray.200">
				{subtitle}
			</Text>
		</VStack>
	);
}
