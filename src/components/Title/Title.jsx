import './Title.module.css';

export default function Title({ children, ...props }) {
	return <h1 {...props}>{children}</h1 >;
}