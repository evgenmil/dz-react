import { configureStore } from '@reduxjs/toolkit';
import { favoriteSlice } from './favorite.slice';
import { loadState, saveState } from './storage';
import { User, UserContext } from '../context/user.context';
import { useContext } from 'react';

export const store = configureStore({
  reducer: {
    favorite: favoriteSlice.reducer,
  },
});

store.subscribe(() => {
  //const { currentUser } = useContext(UserContext);
  const users = loadState<User[]>('users');
  users?.map((i) => {
    //if (i.username === currentUser?.username) {
    i.films = store.getState().favorite.films;

    //}
  });
  saveState(users, 'users');
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
