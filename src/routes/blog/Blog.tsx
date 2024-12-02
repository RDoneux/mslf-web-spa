import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import IBlog from './interfaces/IBlog';
import { db } from '../../firebase';
import { doc, DocumentSnapshot, getDoc } from 'firebase/firestore';
import BackButton from '../../components/back-button/BackButton';
import styles from '../poems/Poem.module.css';
import ReactQuill from 'react-quill';

export default function Blog() {
  const { id } = useParams();
  const [blog, setBlog] = useState<IBlog>();

  useEffect(() => {
    const documentReference = doc(db, 'blogs', id ?? '');
    getDoc(documentReference).then((documentSnapshot: DocumentSnapshot) => {
      const blog: IBlog = {
        ...documentSnapshot.data(),
        id: documentSnapshot.id
      } as IBlog;
      setBlog(blog);
    });
  }, [id]);

  return (
    <div className={styles['wrapper']}>
      <BackButton />
      <h1 className={styles['title']}>{blog?.title}</h1>
      <h2 className={`${styles['author']} dots`}>
        {blog?.author.toUpperCase()}
      </h2>
      <ReactQuill theme="bubble" readOnly={true} value={blog?.content} />
    </div>
  );
}
