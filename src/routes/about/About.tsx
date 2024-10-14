import { useEffect, useState } from 'react';
import styles from './About.module.css';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import IAbout from './interfaces/IAbout';
import ReactQuill from 'react-quill';

export default function About() {
  const [aboutInfo, setAboutInfo] = useState<IAbout>();

  useEffect(() => {
    const documentReference = doc(db, 'author', 'about');
    getDoc(documentReference).then((documentSnapshot) => {
      const about: IAbout = documentSnapshot.data() as IAbout;
      setAboutInfo(about);
    });
  }, []);

  return (
    <div className={styles['container']}>
      <h1>ABOUT</h1>
      <ReactQuill theme="bubble" readOnly={true} value={aboutInfo?.inspiration} />
    </div>
  );
}
