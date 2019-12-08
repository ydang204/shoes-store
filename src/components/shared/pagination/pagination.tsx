import React from "react";
import classnames from "classnames";

import "./pagination.scss";

interface Props {
  pageIndex: number;
  totalPage: number;
  handlePageChange: (page: number) => void;
}

const Pagination: React.FC<Props> = props => {
  const { pageIndex, totalPage, handlePageChange } = props;

  let pages = [];

  for (let index = 1; index <= totalPage; index++) {
    const page = (
      <li className={classnames("page-item", { active: index === pageIndex })}>
        <a className="page-link" onClick={() => handlePageChange(index)}>
          {index}
        </a>
      </li>
    );
    pages.push(page);
  }

  return (
    <div className="row">
      <ul className="pagination">
        <li className="page-item">
          <a className="page-link" onClick={() => handlePageChange(1)}>
            «
          </a>
        </li>
        {pages}
        <li className="page-item">
          <a className="page-link" onClick={() => handlePageChange(totalPage)}>
            »
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Pagination;
