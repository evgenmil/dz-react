import { createContext, useState } from 'react';

export const UserContext = createContext({
	currentUser: null
});

export const UserContextProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);

	return <UserContext.Provider value={{ currentUser, setCurrentUser }}>
		{children}
	</UserContext.Provider>;
}; 