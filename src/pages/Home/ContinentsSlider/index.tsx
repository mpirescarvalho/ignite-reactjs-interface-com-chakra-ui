import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box } from '@chakra-ui/react';

import { Slide } from './Slide';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([Navigation, Pagination]);

const continents = [
	{
		title: 'Europa',
		subtitle: 'O continente mais antigo',
		image: '/europa.jpg',
	},
	{
		title: 'Ásia',
		subtitle: 'O maior continente',
		image: '/asia.jfif',
	},
	{
		title: 'América do Sul',
		subtitle: 'A maior biodiversidade',
		image: '/south-america.jfif',
	},
	{
		title: 'América do Norte',
		subtitle: 'O continente mais diverso',
		image: '/north-america.jfif',
	},
	{
		title: 'África',
		subtitle: 'A maior diversidade étnica',
		image: '/africa.jfif',
	},
	{
		title: 'Oceania',
		subtitle: 'O continente mais isolado',
		image: '/oceania.jfif',
	},
];

export function ContinentsSlider() {
	return (
		<Box
			as={Swiper}
			w="100%"
			h="450px"
			pagination={{ clickable: true }}
			navigation
		>
			{continents.map((continent, index) => (
				<SwiperSlide key={index}>
					<Slide
						title={continent.title}
						subtitle={continent.subtitle}
						backgroundSrc={continent.image}
						backgroundAlt={continent.title}
					/>
				</SwiperSlide>
			))}
		</Box>
	);
}
