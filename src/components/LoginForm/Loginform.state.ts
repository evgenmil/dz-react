import { FormInputValidation, User } from '../../context/user.context';

export interface State {
	isValid: FormInputValidation,
	values: User,
	isFormReadyToSubmit: boolean
}

export interface Action {
	type: 'SET_VALUE' | 'CLEAR' | 'RESET_VALIDITY' | 'LOGIN';
	payload?: object;
}

export const INITIAL_STATE: State = {
	isValid: {
		username: true
	},
	values: {
		username: '',
		isLogined: true
	},
	isFormReadyToSubmit: false
};

export function formReducer(state: State, action: Action): State {
	switch(action.type) {
	case 'SET_VALUE':
		return { ...state, values: { ...state.values, ...action.payload}};
	case 'CLEAR':
		return { ...state, values: INITIAL_STATE.values, isFormReadyToSubmit: false};
	case 'RESET_VALIDITY':
		return { ...state, isValid: INITIAL_STATE.isValid};
	case 'LOGIN' : {
		const usernameValidity = Boolean(state.values.username?.trim().length);
		return {
			...state,
			isValid: {
				username: usernameValidity
			},
			isFormReadyToSubmit: usernameValidity
		};
	}
	}
}