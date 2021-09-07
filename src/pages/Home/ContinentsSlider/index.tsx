import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box } from '@chakra-ui/react';

import { getContinents } from '../../../services/data';
import { Slide } from './Slide';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([Navigation, Pagination]);

const continents = getContinents();

export function ContinentsSlider() {
	return (
		<Box
			as={Swiper}
			w="100%"
			h="450px"
			pagination={{ clickable: true }}
			navigation
		>
			{continents.map((continent) => (
				<SwiperSlide key={continent.id}>
					<Slide
						title={continent.title}
						subtitle={continent.subtitle}
						backgroundSrc={continent.image}
						backgroundAlt={continent.title}
						src={continent.src}
					/>
				</SwiperSlide>
			))}
		</Box>
	);
}
