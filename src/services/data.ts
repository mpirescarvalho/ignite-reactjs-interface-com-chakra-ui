interface Continent {
	id: string;
	title: string;
	subtitle: string;
	image: string;
	src: string;
}

const data = [
	{
		id: 'europa',
		title: 'Europa',
		subtitle: 'O continente mais antigo',
		image: '/europa.jpg',
		src: '/europa',
	},
	{
		id: 'asia',
		title: 'Ásia',
		subtitle: 'O maior continente',
		image: '/asia.jfif',
		src: '/asia',
	},
	{
		id: 'south',
		title: 'América do Sul',
		subtitle: 'A maior biodiversidade',
		image: '/south-america.jfif',
		src: '/south-america',
	},
	{
		id: 'north',
		title: 'América do Norte',
		subtitle: 'O continente mais diverso',
		image: '/north-america.jfif',
		src: '/north-america',
	},
	{
		id: 'africa',
		title: 'África',
		subtitle: 'A maior diversidade étnica',
		image: '/africa.jfif',
		src: '/africa',
	},
	{
		id: 'oceania',
		title: 'Oceania',
		subtitle: 'O continente mais isolado',
		image: '/oceania.jfif',
		src: '/oceania',
	},
];

export function getContinents(): Continent[] {
	return data;
}

export function getContinent(id: string): Continent {
	return data.find((continent) => continent.id === id);
}
