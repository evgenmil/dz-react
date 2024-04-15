import styles from './SearchGroup.module.css';

export default function SearchGroup({ children }) {
	return <div className={styles['search-group']}>{children}</div>;
}