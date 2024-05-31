import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { loadState } from './storage';

export const USERS_PERSISTANT = 'users';
export const CURRENT_USER_PERSISTANT = 'currentUser';

export interface User {
	username: string;
	isLogined: boolean;
}

export interface FormInputValidation {
	username: boolean;
}

export interface UserState {
	currentUser: null | User;
	users: User[];
	isValid: FormInputValidation;
	values: User;
	isFormReadyToSubmit: boolean;
}

const initialState: UserState = {
	currentUser: loadState(CURRENT_USER_PERSISTANT) ?? null,
	users: loadState(USERS_PERSISTANT) ?? [],
	isValid: {
		username: true
	},
	values: {
		username: '',
		isLogined: true
	},
	isFormReadyToSubmit: false
};

function mapItems(items: User[], newItem: User) {
	if (!items) {
		return [];
	}
	return items.map(i => ({
		...i,
		isLogined: (i.username === newItem.username)
	}));
}

function mapItemsLogout(items: User[]) {
	if (!items) {
		return [];
	}
	return items.map((i: User) => ({
		...i,
		isLogined: false
	}));
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		resetValidity: (state) => {
			state.isValid = initialState.isValid;
		},
		clear: (state) => {
			state.values = initialState.values;
			state.isFormReadyToSubmit = false;
		},
		setUsername: (state, action: PayloadAction<{ username: string }>) => {
			state.values.username = action.payload.username;
		},
		login: (state) => {
			const usernameValidity = Boolean(state.values.username?.trim().length);
			state.isValid = {
				username: usernameValidity
			};
			state.isFormReadyToSubmit = usernameValidity;
			if (usernameValidity) {
				state.currentUser = state.values;
			}
		},
		logout: (state) => {
			state.currentUser = null;
			state.users = [...mapItemsLogout(state.users)];
		},
		updateUsers: (state) => {
			let isExistUser = false;
			if (state.users) {
				isExistUser = state.users.some((user: User) => user.username === state.values.username);
			}
			if (isExistUser) {
				state.users = ([...mapItems(state.users, state.values)]);
			} else {
				state.users = ([...mapItems(state.users, state.values), state.values]);
			}
		}
	}
});

export default userSlice.reducer;
export const userActions = userSlice.actions;
