import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { LocalFilm } from '../components/CardItem/CardItem.props';

export interface UserFilms {
  username: string;
  films: LocalFilm[];
}
export interface FavoriteFilmState {
  userFilms: UserFilms[];
}

const initialState: FavoriteFilmState = {
  userFilms: [],
};

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<UserFilms>) => {},
    remove: (state, action: PayloadAction<UserFilms>) => {
      state.films = state.films.filter((i) => i.id !== action.payload.id);
    },
  },
});

export default favoriteSlice.reducer;
export const favoriteActions = favoriteSlice.actions;
