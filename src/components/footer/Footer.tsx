import styles from './Footer.module.css';
import { version } from '../../../package.json';

export default function Footer() {
  return (
    <footer className={styles['footer']}>
      <span></span>
      <span className={styles['app-title']}>MYSELF</span>
      <span className={styles['app-version']}>App Version: {version}</span>
    </footer>
  );
}
