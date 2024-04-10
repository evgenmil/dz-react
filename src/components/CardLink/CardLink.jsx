import './CardLink.css';

export default function CardLink({ label, icon, onClick, className }) {
	const cl = className ? `add-card-link ${className}` : 'add-card-link';
	return <a href='' onClick={onClick} className={cl}>{icon} {label}</a>;
}