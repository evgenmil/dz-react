import './Paragraph.css';

export default function Paragraph({ className, children }) {
	return (
		<p className={className}>
			{children}
		</p>
	);

}