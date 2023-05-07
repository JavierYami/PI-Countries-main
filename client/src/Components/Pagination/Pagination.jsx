import React from 'react';
import NotFound from '../NotFound/NotFound';
import style from './Pagination.module.css';

const Pagination = ({ totalPosts, postsPerPage, setCurrentPage, currentPage }) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  let startPage = Math.max(currentPage - 2, 1);
  let endPage = Math.min(startPage + 4, pages.length);

  startPage = Math.max(endPage - 4, 1);

  const pageButtons = pages.slice(startPage - 1, endPage);

  return (
    <div className={style.container}>
      {pages.length > 0 ? (
        <p>
          Showing page {currentPage} of {pages.length}
        </p>
      ) : (
        ''
      )}
      {pages.length > 0 ? (
        <button onClick={() => setCurrentPage(pages[0])}>{'<<'}</button>
      ) : (
        ''
      )}
      {currentPage !== 1 && pages.length > 0 ? (
        <button onClick={() => setCurrentPage(currentPage - 1)}>{'<'}</button>
      ) : (
        ''
      )}
      {pageButtons.map((page, index) => (
        <button key={index} onClick={() => setCurrentPage(page)}>
          {page}
        </button>
      ))}
      {currentPage !== pages.length && pages.length > 0 ? (
        <button onClick={() => setCurrentPage(currentPage + 1)}>{'>'}</button>
      ) : (
        ''
      )}
      {pages.length > 0 ? (
        <button onClick={() => setCurrentPage(pages.length)}>{'>>'}</button>
      ) : (
        ''
      )}
      {pages.length === 0 && <NotFound />}
    </div>
  );
};

export default Pagination;
