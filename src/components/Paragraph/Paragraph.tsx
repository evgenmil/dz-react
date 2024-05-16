import { HTMLAttributes } from 'react';
import './Paragraph.module.css';

export default function Paragraph({ children, ...props }: HTMLAttributes<HTMLParagraphElement>) {
	return <p {...props}>{children}</p>;
}