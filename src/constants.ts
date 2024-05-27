export interface Film {
  '#TITLE': string
  '#IMDB_ID': string
  '#RANK': number
  '#IMG_POSTER': string
}

export interface ResponseFilm {
	description: Film[]
}

export interface ResponseFilmDetail {
	fake: Film
}