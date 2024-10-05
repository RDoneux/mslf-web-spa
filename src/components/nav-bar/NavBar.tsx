import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';

export default function NavBar() {
  return (
    <nav className={styles['navigation']}>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? styles['active-link'] : ''
            }
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            to="poems"
            className={({ isActive }) =>
              isActive ? styles['active-link'] : ''
            }
          >
            POEMS
          </NavLink>
        </li>
        <li>
          <NavLink
            to="about"
            className={({ isActive }) =>
              isActive ? styles['active-link'] : ''
            }
          >
            ABOUT
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
