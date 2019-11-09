import React from 'react';

import './pagination.scss';

type Props = {
  itemPerPage: any, totalItems: any, paginate: any,
};

const Pagination: React.FC<Props> = ({ itemPerPage, totalItems, paginate }) => {
  const pageNumbers = [];
  for (let i =1; i <= Math.ceil(totalItems / itemPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => paginate(number)} href='#' className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;

// <Pagination
//         itemPerPage={itemPerPage}
//         totalItems={items.length}
//         paginate={paginate}
// />