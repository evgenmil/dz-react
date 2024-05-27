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
	
	const saveData = (newData: unknown) => {
		if (typeof newData === 'object' && newData !== null) {
			localStorage.setItem(key, JSON.stringify(newData));
		} else {
			localStorage.setItem(key, String(newData));
		}
		setData(newData);
	};

	return [data, saveData];
}