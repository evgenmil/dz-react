import './Button.css';

export default function Button({ label, className, onClick }) {
	return <button className={className} onClick={onClick}>{label}</button>;
}