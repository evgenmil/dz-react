export interface Film {
  '#TITLE': string
  '#IMDB_ID': string
  '#RANK': number
  '#IMG_POSTER': string
}

export interface FilmShort {
	'@type': string,
	description: string,
	duration: string,
	datePublished: string,
	genre: string[],
	aggregateRating: {
		ratingValue: number
	},
	review: {
		name: string,
		reviewBody: string,
		dateCreated: string
	}
}

export interface ResponseFilm {
	description: Film[]
}

export interface ResponseFilmDetail {
	fake: Film,
	short: FilmShort,
}