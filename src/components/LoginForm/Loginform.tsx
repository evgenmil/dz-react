import { ChangeEvent, FormEvent, useContext, useEffect, useReducer, useRef } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import styles from './LoginForm.module.css';
import { INITIAL_STATE, TypeDispatchForm, formReducer } from './Loginform.state';
import { FormInputValidation, UserContext } from '../../context/user.context';

export default function LoginForm() {
	const [formData, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
	const { isValid, isFormReadyToSubmit, values } = formData;
	const { updateUsers } = useContext(UserContext);
	const usernameRef = useRef<HTMLInputElement | null>();

	const focusError = (isValid: FormInputValidation) => {
		if (!isValid.username) {
			if (usernameRef.current) {
				usernameRef.current.focus();
			}
		}
	};

	useEffect(() => {
		let timerId: number;
		if (!isValid.username) {
			focusError(isValid);
			timerId = setTimeout(() => {
				dispatchForm({ type: TypeDispatchForm.RESET_VALIDITY });
			}, 2000);
		}

		return () => {
			clearTimeout(timerId);
		};
	}, [isValid]);

	useEffect(() => {
		if (isFormReadyToSubmit) {
			updateUsers(values);
			dispatchForm({ type: TypeDispatchForm.CLEAR });
		}
	}, [isFormReadyToSubmit, values, updateUsers]);

	const login = (e: FormEvent) => {
		e.preventDefault();
		dispatchForm({ type: TypeDispatchForm.LOGIN });
	};

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		dispatchForm({ type: TypeDispatchForm.SET_VALUE, payload: { [e.target.name]: e.target.value } });
	};

	return (
		<form className={styles['login-form']} onSubmit={login}>
			<Input autoComplete="off" name="username" ref={usernameRef} onChange={onChange} value={values.username} placeholder="Ваше имя" />
			<Button label="Войти в профиль" />
		</form>
	);
}