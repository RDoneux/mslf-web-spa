import { useEffect } from 'react';
import { usePagination } from '../poems/hooks/usePagination';
import { useTotalCount } from '../poems/hooks/useTotalCount';
import IBlog from './interfaces/IBlog';
import Pagination from '../../components/pagination/Pagination';
import styles from './Blogs.module.css'
import { NavLink } from 'react-router-dom';

const PAGE_SIZE: number = 10;

export default function Blogs() {
  const blogCount = useTotalCount('blogs');
  const { items, paginate } = usePagination<IBlog>(PAGE_SIZE, 'blogs');
  const pages: number = Math.ceil((blogCount ?? 0) / PAGE_SIZE);

  useEffect(() => {
    paginate(true);
  }, []); // eslint-disable-line

  return (
    <div className={styles['container']}>
      <h1>BLOGS</h1>
      <div className={styles['blog-wrapper']}>
        {items.map((blog: IBlog) => (
          <div key={blog.id} className={styles['blog-container']}>
            <NavLink to={`/blog/${blog.id}`}>
              <h2>{blog.title}</h2>
              <p>{blog.overview}</p>
              <img src={blog.image} />
              <h3>
                <span>{blog.author}</span>
                <span>{blog.dateCreated.toDate().toDateString()} | {blog.timeToRead}</span>
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
