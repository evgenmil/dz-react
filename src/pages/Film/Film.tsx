import { Await, useLoaderData } from 'react-router-dom';
import Title from '../../components/Title/Title';
import { ResponseFilmDetail } from '../../constants';
import { Suspense } from 'react';

export default function Film() {
	const data = useLoaderData() as { data: ResponseFilmDetail };
	console.log(data);

	return <>
		<Suspense fallback={'Загружаю...'}>
			<Await resolve={data.data}>
				{({ data }: { data: ResponseFilmDetail }) => (
					<Title>{data.fake['#TITLE']}</Title>
				)}
			</Await>
		</Suspense>
	</>;
}