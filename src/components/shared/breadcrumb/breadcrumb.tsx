import React from "react";
import BreadcrumbItem from "../../../_models/shared/breadcrumb-item";
import classnames from "classnames";
import { Link } from "react-router-dom";

import "./breadcrumb.scss";
import BreadcrumbRightArrow from "../../../assets/images/icons/breadcrumb-right-arrow.png";

interface Props {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<Props> = props => {
  const { items } = props;

  const breadcrumbs = () => {
    return items.map((item, index) => {
      const isActive = index === items.length - 1;

      return (
        <React.Fragment key={index}>
          <li>
            <img
              className="breadcrumb-arrow"
              src={BreadcrumbRightArrow}
              alt="Breadcrumb arrow"
            />
          </li>
          <li
            className={classnames("breadcrumb-item", {
              active: isActive
            })}
            aria-current="page"
          >
            {item.url && <Link to={`/${item.url}`}>{item.name}</Link>}
            {!item.url && item.name}
          </li>
        </React.Fragment>
      );
    });
  };

  return (
    <div className="container breadcrumb-container">
      <div className="row">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Trang chủ</Link>
            </li>
            {breadcrumbs()}
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default Breadcrumb;
