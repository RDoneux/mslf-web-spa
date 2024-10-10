import {
  doc,
  DocumentData,
  DocumentSnapshot,
  getDoc
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../../../firebase';

export const useTotalPoemCount = () => {
  const [totalPoemCount, setTotalPoemCount] = useState<number>();

  useEffect(() => {
    const documentReference = doc(db, 'poems', 'count');
    getDoc(documentReference).then(
      (value: DocumentSnapshot<DocumentData, DocumentData>) => {
        const count: DocumentData | undefined = value.data();
        setTotalPoemCount((count as { value: number }).value);
      }
    );
  }, []);

  return totalPoemCount;
};
