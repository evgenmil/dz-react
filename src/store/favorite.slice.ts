import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { LocalFilm } from '../components/CardItem/CardItem.props';
import { loadState } from './storage';

export const USERS_FILM_PERSISTANT = 'userFilms';

export interface UserFilms {
  username: string;
  films: LocalFilm[];
}
export interface FavoriteFilmState {
  userFilms: UserFilms[];
}

const initialState: FavoriteFilmState = {
	userFilms: loadState(USERS_FILM_PERSISTANT) ?? []
};

export const favoriteSlice = createSlice({
	name: 'favorite',
	initialState,
	reducers: {
		add: (state, action: PayloadAction<UserFilms>) => {
			const { username, films } = action.payload;
			const userIndex = state.userFilms.findIndex(user => user.username === username);

			if (userIndex !== -1) {
				const existingFilms = state.userFilms[userIndex].films;
				const newFilms = films.filter(film => !existingFilms.some(existingFilm => existingFilm.id === film.id));
				state.userFilms[userIndex].films.push(...newFilms);
			} else {
				state.userFilms.push({ username, films });
			}
		},
		remove: (state, action: PayloadAction<{ username: string; filmId: string }>) => {
			const { username, filmId } = action.payload;
			const userIndex = state.userFilms.findIndex(user => user.username === username);

			if (userIndex !== -1) {
				state.userFilms[userIndex].films = state.userFilms[userIndex].films.filter(film => filmId !== film.id);

				if (state.userFilms[userIndex].films.length === 0) {
					state.userFilms.splice(userIndex, 1);
				}
			}
		}
	}
});

export default favoriteSlice.reducer;
export const favoriteActions = favoriteSlice.actions;
