import { useParams } from 'react-router-dom';
import { IPoem } from './interfaces/IPoem';
import { useEffect, useState } from 'react';
import styles from './Poem.module.css';
import BackButton from '../../components/back-button/BackButton';
import { db } from '../../firebase';
import { doc, getDoc } from 'firebase/firestore';

export default function Poem() {
  const { id } = useParams();
  const [poem, setPoem] = useState<IPoem>();

  useEffect(() => {
    const documentReference = doc(db, 'poems', id ?? '');
    getDoc(documentReference).then((documentSnapshot) => {
      const poem: IPoem = {
        ...documentSnapshot.data(),
        id: documentSnapshot.id
      } as IPoem;
      setPoem(poem);
    });
  }, [id]);

  return (
    <div>
      <BackButton />
      <h1 className={styles['title']}>{poem?.title}</h1>
      <h2 className={`${styles['author']} dots`}>
        {poem?.author.toUpperCase()}
      </h2>
      <p className={styles['content']}>{poem?.content}</p>
    </div>
  );
}
