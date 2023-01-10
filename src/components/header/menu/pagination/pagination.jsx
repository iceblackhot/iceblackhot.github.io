import React from 'react';

export const Pagination = () => {
  const pageNums = [];

  for (let i = 1; i <= Math.ceil(totalMov / moviesPerPage); i++) {
    pageNums.push(i);
  }
  return (
    <div>
      <ul className="pagination">
        {pageNums.map((number) => (
          <li className="pagination__item" key={number}>
            <a href="!#" className="pagination__link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
