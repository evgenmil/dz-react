import './Icon.css';

export default function Icon({ name, alt = '' }) {
	return <img src={name} alt={alt} />;
}