import './CardLink.css';

export default function CardLink({ label, icon, onClick, className }) {
	const cl = 'add-card-link ' + (className || '');
	return <a onClick={onClick} className={cl}>{icon} {label}</a>;
}