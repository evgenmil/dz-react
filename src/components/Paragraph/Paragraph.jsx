import './Paragraph.css';

export default function Paragraph(props) {
	return (
		<p className={props.className}>
			{props.children}
		</p>
	);

}