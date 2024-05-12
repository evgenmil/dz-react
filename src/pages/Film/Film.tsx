import { Await, useLoaderData } from 'react-router-dom';
import Title from '../../components/Title/Title';
import { ResponseFilmDetailInterface } from '../../constants';
import { Suspense } from 'react';

export default function Film() {
	const data = useLoaderData() as { data: ResponseFilmDetailInterface };
	console.log(data);

	return <>
		<Suspense fallback={'Загружаю...'}>
			<Await resolve={data.data}>
				{({ data }: { data: ResponseFilmDetailInterface }) => (
					<Title>{data.fake['#TITLE']}</Title>
				)}
			</Await>
		</Suspense>
	</>;
}