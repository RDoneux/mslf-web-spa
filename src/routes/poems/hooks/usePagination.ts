import {
  startAfter,
  endBefore,
  limit,
  limitToLast,
  query,
  collection,
  orderBy,
  getDocs,
  DocumentData,
  QueryDocumentSnapshot
} from 'firebase/firestore';
import { db } from '../../../firebase';
import { useState } from 'react';

export const usePagination = <T>(pageSize: number, collectionName: string) => {
  const [items, setItems] = useState<T[]>([]);
  const [lastVisible, setLastVisible] =
    useState<QueryDocumentSnapshot<DocumentData, DocumentData>>();
  const [firstVisible, setFirstVisible] =
    useState<QueryDocumentSnapshot<DocumentData, DocumentData>>();

  const paginate = async (increment: boolean) => {
    const startingMethod = increment
      ? startAfter(lastVisible)
      : endBefore(firstVisible);

    // increment deterimins which limit should be used
    const chunkLimit = increment ? limit(pageSize) : limitToLast(pageSize);

    let itemQuery = query(
      collection(db, collectionName),
      orderBy('dateCreated'),
      chunkLimit
    );

    // if lastVisible has been set & increment, we can determin the starting value. Likewise if we're decrementing & firstVisible has been set
    if ((increment && lastVisible) || (!increment && firstVisible)) {
      itemQuery = query(
        collection(db, collectionName),
        orderBy('dateCreated'),
        startingMethod,
        chunkLimit
      );
    }

    const querySnapshot = await getDocs(itemQuery);
    const tempItems: T[] = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id
    })) as T[];

    setItems(tempItems);
    setFirstVisible(querySnapshot.docs[0]);
    setLastVisible(querySnapshot.docs[querySnapshot.docs.length - 1]);
  };

  return { items, paginate };
};
