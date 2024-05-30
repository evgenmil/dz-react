import { configureStore } from '@reduxjs/toolkit';
import { USERS_FILM_PERSISTANT, favoriteSlice } from './favorite.slice';
import { saveState } from './storage';

export const store = configureStore({
	reducer: {
		favorite: favoriteSlice.reducer
	}
});

store.subscribe(() => {
	saveState(store.getState().favorite.userFilms, USERS_FILM_PERSISTANT);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
