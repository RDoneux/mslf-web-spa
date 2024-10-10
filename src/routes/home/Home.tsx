import profileImage from '/profile-image.jpg';
import IAuthor from './interfaces/IAuthor.ts';
import styles from './Home.module.css';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';

export default function Home() {
  const [authorDetails, setAuthorDetails] = useState<IAuthor>();

  useEffect(() => {
    const documentReference = doc(db, 'author', 'details');
    getDoc(documentReference).then((documentSnapshot) => {
      const details: IAuthor = {
        ...documentSnapshot.data(),
        id: documentSnapshot.id
      } as IAuthor;
      setAuthorDetails(details);
    });
  }, []);

  return (
    <div className={styles['container']}>
      <h1>{authorDetails?.name}</h1>

      <div className={styles['profile-image-wrapper']}>
        <img src={profileImage} alt="Author profile image" />
      </div>

      <div className={styles['enter-wrapper']}>
        <h2>{authorDetails?.tag}</h2>
        <NavLink to="poems">
          <button>ENTER</button>
        </NavLink>
      </div>
    </div>
  );
}
