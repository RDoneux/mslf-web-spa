import { doc, DocumentData, DocumentSnapshot, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../firebase";

export const useTotalPoemCount = () => {
  const [totalPoemCount, setTotalPoemCount] = useState<number>();

  useEffect(() => {
    const documentReference = doc(db, 'poems', 'count');
    getDoc(documentReference).then((value: DocumentSnapshot<DocumentData, DocumentData>) => {
       const count: any = value.data();
       setTotalPoemCount(count.value)
    })
  }, [])

  return totalPoemCount
}