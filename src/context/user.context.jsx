import { createContext, useEffect, useState } from 'react';
import { useLocalStorage } from '../hooks/use-localstorage.hook';

export const UserContext = createContext({
	currentUser: null
});

function mapItems(items, newItem) {
	if (!items) {
		return [];
	}
	return items.map(i => ({
		...i,
		isLogined: (i.username === newItem.username)
	}));
}

function mapItemsLogout(items) {
	if (!items) {
		return [];
	}
	return items.map(i => ({
		...i,
		isLogined: false
	}));
}

export const UserContextProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);
	const [users, setUsers] = useLocalStorage('users');

	const updateUsers = item => {
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

	const logout = () => {
		setCurrentUser(null);
		setUsers([...mapItemsLogout(users)]);
	};

	useEffect(() => {
		const loggedInUser = users.find(user => user.isLogined === true);
		if (loggedInUser) {
			setCurrentUser(loggedInUser);
		}
	}, []);

	return <UserContext.Provider value={{ currentUser, setCurrentUser, updateUsers, logout }}>
		{children}
	</UserContext.Provider>;
}; 