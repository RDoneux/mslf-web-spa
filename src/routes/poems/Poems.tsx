import { useEffect } from 'react';
import { IPoem } from './interfaces/IPoem';
import styles from './Poems.module.css';
import { NavLink } from 'react-router-dom';
import Pagination from '../../components/pagination/Pagination';
import { useTotalCount } from './hooks/useTotalCount';
import { usePagination } from './hooks/usePagination';

const PAGE_SIZE: number = 10;

export default function Poems() {
  const poemCount = useTotalCount('poems');
  const { items, paginate } = usePagination<IPoem>(PAGE_SIZE, 'poems');
  const pages: number = Math.ceil((poemCount ?? 0) / PAGE_SIZE);

  useEffect(() => {
    paginate(true);
  }, []); // eslint-disable-line

  return (
    <div className={styles['container']}>
      <h1>POEMS</h1>
      <div className={styles['poem-wrapper']}>
        {items.map((poem: IPoem) => (
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
