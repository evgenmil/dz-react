import React from 'react';
import ReactDOM from 'react-dom/client';
import styles from './index.module.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './layout/Layout/Layout.tsx';
import Search from './pages/Search/Search.tsx';
import Login from './pages/Login/Login.tsx';
import Favorites from './pages/Favorites/Favorites.tsx';
import NotFound from './pages/NotFound/NotFound.tsx';

const root = document.getElementById('root');
root?.classList.add(styles.app);

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <Search />
			},
			{
				path: '/login',
				element: <Login />
			},
			{
				path: '/favorites',
				element: <Favorites />
			},
			{
				path: '*',
				element: <NotFound />
			}
		]
	}
]);

ReactDOM.createRoot(root!).render(
	<React.StrictMode>
		<RouterProvider router={router}></RouterProvider>
	</React.StrictMode>
);
