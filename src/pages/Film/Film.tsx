import { Await, useLoaderData } from 'react-router-dom';
import { ResponseFilmDetail } from '../../constants';
import { Suspense } from 'react';
import styles from './Film.module.css';
import FilmTile from '../../components/FilmTile/FilmTile';
import FilmImage from '../../components/FilmImage/FilmImage';
import FilmParams from '../../components/FilmParams/FilmParams';

export default function Film() {
	const data = useLoaderData() as { data: ResponseFilmDetail };

	return <>
		<Suspense fallback={'Загружаю...'}>
			<Await resolve={data.data}>
				{({ data }: { data: ResponseFilmDetail }) => (
					<>
						<FilmTile>
							<div className={styles.small}>Поиск фильмов</div>
							<div className={styles.title}>{data.fake['#TITLE']}</div>
						</FilmTile>
						<div className={styles.wrapFilm}>
							<FilmImage src={data.fake['#IMG_POSTER']} />
							<FilmParams film={data} />
						</div>
						{data.short.review && <><div className={styles.label}>Отзывы</div>
							<FilmTile className={styles.review}>
								<div className={styles.reviewHeader}>
									<div className={styles.reviewName}>{data.short.review.name}</div>
									<div className={styles.reviewDate}>{data.short.review.dateCreated}</div>
								</div>
								<div className={styles.reviewBody}>{data.short.review.reviewBody}</div>
							</FilmTile>
						</>}
					</>
				)}
			</Await>
		</Suspense>
	</>;
}