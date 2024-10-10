import { useEffect } from 'react';
import { IPoem } from './interfaces/IPoem';
import styles from './Poems.module.css';
import { NavLink } from 'react-router-dom';
import Pagination from '../../components/pagination/Pagination';
import { useTotalPoemCount } from './hooks/useTotalPoemCount';
import { usePagination } from './hooks/usePagination';

const PAGE_SIZE: number = 10;

export default function Poems() {
  const poemCount = useTotalPoemCount();
  const { poems, paginate } = usePagination(PAGE_SIZE);
  const pages: number = Math.round((poemCount ?? 0) / PAGE_SIZE);

  useEffect(() => {
    paginate(true);
  }, []);

  return (
    <div className={styles['container']}>
      <h1>POEMS</h1>
      <div className={styles['poem-wrapper']}>
        {poems.map((poem: IPoem) => (
          <div key={poem.id} className={styles['poem-container']}>
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

      {pages ? (
        <div className={styles['pagination']}>
          <Pagination
            pages={pages}
            onNextPage={() => paginate(true)}
            onPreviousPage={() => paginate(false)}
          />
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
