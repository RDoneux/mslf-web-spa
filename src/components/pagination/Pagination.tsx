import { useState } from 'react';
import styles from './Pagination.module.css'

interface PaginationProps {
    pages: number;
    onNextPage: () => void;
    onPreviousPage: () => void;
}

export default function Pagination({ pages, onNextPage, onPreviousPage }: PaginationProps) {

    const [currentPage, setCurrentPage] = useState<number>(0)

    return (
        <>
            <div className={styles['pip-wrapper']}>
                <span style={{cursor: 'pointer'}} className="material-symbols-outlined" onClick={() => (setCurrentPage((e) => e = e-1), onPreviousPage())}>
                    chevron_left
                </span>
                {[...Array(pages)].map((e, i) => <div key={i} className={`${styles['page-pip']} ${i === currentPage ? styles['current-page'] : ''}`}></div>)}
                <span style={{cursor: 'pointer'}} className="material-symbols-outlined" onClick={() => (setCurrentPage((e) => e = e+1), onNextPage())}>
                    chevron_right
                </span>
            </div>
        </>
    )
}