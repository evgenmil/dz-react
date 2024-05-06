import { useEffect, useState } from 'react';

export function useLocalStorage(key: string) {
	const [data, setData] = useState(() => {
		const res = localStorage.getItem(key);
		return res ? JSON.parse(res) : null;
	});

	useEffect(() => {
		const res = localStorage.getItem(key);
		if (res) {
			setData(JSON.parse(res));
		}
	}, [key]);
	
	const saveData = (newData: object) => {
		localStorage.setItem(key, JSON.stringify(newData));
		setData(newData);
	};

	return [data, saveData];
}