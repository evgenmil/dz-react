import './Input.css';

export default function Input({ placeholder, icon }) {
	const cl = 'text-input' + (icon ? ' text-input-icon ' + icon : '');

	return <input type='text' className={cl} placeholder={placeholder} />;
}