import './Logo.module.css';
import { ImgHTMLAttributes } from 'react';

export default function Logo({ ...props }: ImgHTMLAttributes<HTMLImageElement>) {
	return <img src='/logo.svg' alt='Logo' {...props} />;
}