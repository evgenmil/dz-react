import './Icon.module.css';
import { IconProps } from './Icon.props';

export default function Icon({ srcImage, ...props }: IconProps) {
	return <img {...props} src={srcImage} />;
}