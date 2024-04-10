import './Badge.css';

export default function Badge({ type, count }) {
	const cl = 'badge ' + (type || '');

	return <span className={cl}>{count}</span>;
}