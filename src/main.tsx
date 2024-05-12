import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import styles from './index.module.css';
import { createBrowserRouter, defer, RouterProvider } from 'react-router-dom';
import Layout from './layout/Layout/Layout.tsx';
import Login from './pages/Login/Login.tsx';
import Favorites from './pages/Favorites/Favorites.tsx';
import NotFound from './pages/NotFound/NotFound.tsx';
import Film from './pages/Film/Film.tsx';
import { BASE_API } from './helpers/API.ts';
import axios from 'axios';

const root = document.getElementById('root');
root?.classList.add(styles.app);

const Search = lazy(() => import('./pages/Search/Search'));

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <Suspense fallback={<>Загрузка...</>}><Search /></Suspense>
			},
			{
				path: '/film/:id',
				element: <Film />,
				errorElement: <NotFound />,
				loader: async ({ params }) => {
					return defer({
						data: new Promise((resolve, reject) => {
							setTimeout(() => {
								axios.get(`${BASE_API}/?tt=${params.id}`)
									.then((data) => resolve(data))
									.catch(e => reject(e));
							}, 500);
						})
					});
				}
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
