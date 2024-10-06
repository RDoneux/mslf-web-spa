import profileImage from '/profile-image.jpg';

import styles from './Home.module.css';
import { NavLink } from 'react-router-dom';

export default function Home() {
  return (
    <div className={styles['container']}>
      <h1>James Smith</h1>

      <div className={styles['profile-image-wrapper']}>
        <img src={profileImage} alt="Author profile image" />
      </div>

      <div className={styles['enter-wrapper']}>
        <h2>Poet & Blogger</h2>
        <NavLink to="poems">
          <button>ENTER</button>
        </NavLink>
      </div>
    </div>
  );
}
