import { useEffect, useState } from 'react';
import { IPoem } from './interfaces/IPoem';
import styles from './Poems.module.css';
import { NavLink } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';

export default function Poems() {
  const [poemData, setPoemData] = useState<IPoem[]>([]);

  useEffect(() => {
    getDocs(collection(db, 'poems')).then((querySnapshot) => {
      const poems: IPoem[] = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id
      })) as IPoem[];
      setPoemData(poems);
    });
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
