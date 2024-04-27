import { useContext, useEffect, useReducer, useRef } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import styles from './LoginForm.module.css';
import { INITIAL_STATE, formReducer } from './Loginform.state';
import { UserContext } from '../../context/user.context';

export default function LoginForm() {
	const [formData, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
	const { isValid, isFormReadyToSubmit, values } = formData;
	const { updateUsers } = useContext(UserContext);
	const usernameRef = useRef();

	const focusError = (isValid) => {
		if (!isValid.username) {
			usernameRef.current.focus();
		}
	};

	useEffect(() => {
		let timerId;
		if (!isValid.username) {
			focusError(isValid);
			timerId = setTimeout(() => {
				dispatchForm({ type: 'RESET_VALIDITY' });
			}, 2000);
		}

		return () => {
			clearTimeout(timerId);
		};
	}, [isValid]);

	useEffect(() => {
		if (isFormReadyToSubmit) {
			updateUsers(values);
			dispatchForm({ type: 'CLEAR' });
		}
	}, [isFormReadyToSubmit, values, updateUsers]);

	const login = (e) => {
		e.preventDefault();
		dispatchForm({ type: 'LOGIN' });
	};

	const onChange = (e) => {
		dispatchForm({ type: 'SET_VALUE', payload: { [e.target.name]: e.target.value } });
	};

	return (
		<form className={styles['login-form']} onSubmit={login}>
			<Input autoComplete="off" name="username" ref={usernameRef} onChange={onChange} value={values.username} placeholder="Ваше имя" />
			<Button label="Войти в профиль" className="primary" />
		</form>
	);
}