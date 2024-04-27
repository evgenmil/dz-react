export const INITIAL_STATE = {
	isValid: {
		username: true
	},
	values: {
		username: '',
		isLogined: true
	},
	isFormReadyToSubmit: false
};

export function formReducer(state, action) {
	switch(action.type) {
	case 'SET_VALUE':
		return { ...state, values: { ...state.values, ...action.payload}};
	case 'CLEAR':
		return { ...state, values: INITIAL_STATE.values, isFormReadyToSubmit: false};
	case 'RESET_VALIDITY':
		return { ...state, isValid: INITIAL_STATE.isValid};
	case 'LOGIN' : {
		const usernameValidity = state.values.username?.trim().length;
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