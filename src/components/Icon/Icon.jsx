import './Icon.css';

export default function Icon({ name, alt = '' }) {
	const src = '/' + name;
	return <img src={src} alt={alt} />;
}