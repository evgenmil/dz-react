import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import styles from './index.module.css';

const root = document.getElementById('root');
root?.classList.add(styles.app);

ReactDOM.createRoot(root!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
