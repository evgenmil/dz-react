import { ReactNode, createContext, useEffect, useState } from 'react';
import { useLocalStorage } from '../hooks/use-localstorage.hook';
import { useNavigate } from 'react-router-dom';

export interface FormInputValidation {
	username: boolean;
}

export interface User {
	username: string;
	isLogined: boolean;
}

export interface UserContextProps {
	currentUser: null | User;
	updateUsers: (user: User) => void;
	logout: () => void;
}

export const UserContext = createContext<UserContextProps>({
	currentUser: null,
	logout: function () {
		throw new Error('Function not implemented.');
	},
	updateUsers: function (user: User) {
		throw new Error('Function not implemented.');
	}
});

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

export interface UserContextProviderProps {
	children: ReactNode;
}

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
	const [currentUser, setCurrentUser] = useState<User | null>(null);
	const [users, setUsers] = useLocalStorage('users');
	const navigate = useNavigate();

	const updateUsers = (item: User) => {
		let isExistUser = false;
		if (users) {
			isExistUser = users.find((user: User) => user.username === item.username);
		}
		if (isExistUser) {
			setUsers([...mapItems(users, item)]);
		} else {
			setUsers([...mapItems(users, item), item]);
		}
		navigate('/');
	};

	const logout = () => {
		setCurrentUser(null);
		setUsers([...mapItemsLogout(users)]);
		navigate('/auth/login');
	};

	useEffect(() => {
		const loggedInUser = users?.find((user: User) => user.isLogined === true);
		if (loggedInUser) {
			setCurrentUser(loggedInUser);
		}
	}, [users]);

	return <UserContext.Provider value={{ currentUser, updateUsers, logout }}>
		{children}
	</UserContext.Provider>;
}; 