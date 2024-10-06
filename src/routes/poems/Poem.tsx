import { useParams } from 'react-router-dom';
import { IPoem } from './interfaces/IPoem';
import { useEffect, useState } from 'react';
import { poemsPage } from '../../assets/mock-data';
import styles from './Poem.module.css';
import BackButton from '../../components/back-button/BackButton';

export default function Poem() {
  const { id } = useParams();
  const [poem, setPoem] = useState<IPoem>();

  useEffect(() => {
    setPoem(poemsPage.find((poem: IPoem) => poem.id === id));
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
