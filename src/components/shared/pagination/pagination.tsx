import React from "react";
import classnames from "classnames";

import "./pagination.scss";

interface Props {
  page: number;
  totalPage: number;
  handlePageChange: (page: number) => void;
}

const Pagination: React.FC<Props> = props => {
  const { page, totalPage, handlePageChange } = props;

  let pages = [];

  for (let index = 1; index <= totalPage; index++) {
    const currentPage = (
      <li className={classnames("page-item", { active: index === page })}>
        <a className="page-link" onClick={() => handlePageChange(index)}>
          {index}
        </a>
      </li>
    );
    pages.push(currentPage);
  }

  return totalPage > 0 ? (
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
  ) : null;
};
export default Pagination;
