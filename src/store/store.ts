import { configureStore } from '@reduxjs/toolkit';
import favoriteSlice, { USERS_FILM_PERSISTANT } from './favorite.slice';
import { saveState } from './storage';
import userSlice, { CURRENT_USER_PERSISTANT, USERS_PERSISTANT } from './user.slice';

export const store = configureStore({
	reducer: {
		favorite: favoriteSlice,
		user: userSlice
	}
});

store.subscribe(() => {
	saveState(store.getState().favorite.userFilms, USERS_FILM_PERSISTANT);
	saveState(store.getState().user.currentUser, CURRENT_USER_PERSISTANT);
	saveState(store.getState().user.users, USERS_PERSISTANT);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
