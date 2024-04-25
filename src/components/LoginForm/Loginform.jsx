import { useContext, useEffect, useReducer, useRef } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import styles from './LoginForm.module.css';
import { INITIAL_STATE, formReducer } from './Loginform.state';
import { useLocalStorage } from '../../hooks/use-localstorage.hook';
import { UserContext } from '../../context/user.context';

function mapItems(items, newItem) {
	if (!items) {
		return [];
	}
	return items.map(i => ({
		...i,
		isLogined: (i.username === newItem.username)
	}));
}

export default function LoginForm() {
	const [formData, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
	const { isValid, isFormReadyToSubmit, values } = formData;
	const [users, setUsers] = useLocalStorage('users');
	const { currentUser, setCurrentUser } = useContext(UserContext);
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
			login(values);
			dispatchForm({ type: 'CLEAR' });
		}
	}, [isFormReadyToSubmit, values, setUsers]);

	const loginSubmit = (e) => {
		e.preventDefault();
		dispatchForm({ type: 'LOGIN' });
	};

	const login = item => {
		let isExistUser = false;
		if (users) {
			isExistUser = users.find(user => user.username === item.username);
		}
		if (isExistUser) {
			setUsers([...mapItems(users, item)]);
			setCurrentUser({ ...isExistUser, isLogined: true });
		} else {
			setUsers([...mapItems(users, item), item]);
			setCurrentUser(item);
		}
	};

	const onChange = (e) => {
		dispatchForm({ type: 'SET_VALUE', payload: { [e.target.name]: e.target.value } });
	};

	return (
		<form className={styles['login-form']} onSubmit={loginSubmit}>
			<Input autoComplete="off" name="username" ref={usernameRef} onChange={onChange} value={values.username} placeholder="Ваше имя" />
			<Button label="Войти в профиль" className="primary" />
		</form>
	);
}