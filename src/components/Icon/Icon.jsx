import './Icon.module.css';

export default function Icon({ srcImage, alt = '' }) {
	return <img src={srcImage} alt={alt} />;
}