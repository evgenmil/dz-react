export interface FilmInterface {
  '#TITLE': string
  '#IMDB_ID': string
  '#RANK': number
  '#IMG_POSTER': string
}

export interface ResponseFilmInterface {
	description: FilmInterface[]
}

export interface ResponseFilmDetailInterface {
	fake: FilmInterface
}