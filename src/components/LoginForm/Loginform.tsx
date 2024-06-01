import { ChangeEvent, FormEvent, useEffect, useRef } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import styles from './LoginForm.module.css';
import { FormInputValidation } from '../../context/user.context';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { userActions } from '../../store/user.slice';
import { useNavigate } from 'react-router-dom';

export type LoginForm = {
	username: {
		value: string;
	},
}

export default function LoginForm() {
	const usernameRef = useRef<HTMLInputElement | null>(null);
	const { isValid, isFormReadyToSubmit, values, currentUser } = useSelector((s: RootState) => s.user);
	const dispatch = useDispatch<AppDispatch>();
	const navigate = useNavigate();

	const focusError = (isValid: FormInputValidation) => {
		if (!isValid.username) {
			if (usernameRef.current) {
				usernameRef.current.focus();
			}
		}
	};	
	
	useEffect(() => {
		if (currentUser) {
			navigate('/');
		}
	}, [currentUser, navigate]);

	useEffect(() => {
		let timerId: number;
		if (!isValid.username) {
			focusError(isValid);
			timerId = setTimeout(() => {
				dispatch(userActions.resetValidity());
			}, 2000);
		}

		return () => {
			clearTimeout(timerId);
		};
	}, [dispatch, isValid]);

	useEffect(() => {
		if (isFormReadyToSubmit) {
			dispatch(userActions.updateUsers());
			dispatch(userActions.clear());
		}
	}, [isFormReadyToSubmit, values, dispatch]);

	const login = (e: FormEvent) => {
		e.preventDefault();
		dispatch(userActions.login());
	};

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		dispatch(userActions.setUsername({ username: e.target.value }));
	};

	return (
		<form className={styles['login-form']} onSubmit={login}>
			<Input autoComplete="off" name="username" onChange={onChange} value={values.username} ref={usernameRef} placeholder="Ваше имя" />
			<Button label="Войти в профиль" />
		</form>
	);
}