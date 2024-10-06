import { useEffect, useState } from 'react';
import { IPoem } from './interfaces/IPoem';
import styles from './Poems.module.css';
import { poemsPage } from '../../assets/mock-data';
import { NavLink } from 'react-router-dom';

export default function Poems() {
  const [poemData, setPoemData] = useState<IPoem[]>([]);

  useEffect(() => {
    setPoemData(poemsPage);
  }, []);

  return (
    <div className={styles['container']}>
      <h1>POEMS</h1>
      {poemData.map((poem: IPoem) => (
        <div className={styles['poem-container']}>
          <NavLink to={`/poem/${poem.id}`}>
            <h2>{poem.title}</h2>
            <img src={poem.image} />
            <h3>
              <span>{poem.author}</span>
              <span>{poem.timeToRead}</span>
            </h3>
          </NavLink>
        </div>
      ))}
    </div>
  );
}
