import { useParams } from 'react-router-dom';
import { IPoem } from './interfaces/IPoem';
import { useEffect, useState } from 'react';
import { poemsPage } from '../../assets/mock-data';

export default function Poem() {
  const { id } = useParams();
  const [poem, setPoem] = useState<IPoem>();

  useEffect(() => {
    setPoem(poemsPage.find((poem: IPoem) => poem.id === id));
  }, [id]);

  return (
    <div>
      <h1>{poem?.title}</h1>
    </div>
  );
}
