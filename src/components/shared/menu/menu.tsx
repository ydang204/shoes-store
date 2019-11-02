import React from "react";
import './menu.scss';

const Menu: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-light navbar-light">
      <a className="navbar-brand" href="#">
        <strong>Windo.shop</strong>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              <i className="fa fa-home"></i><strong>Trang chủ </strong><span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="navitem">

          </li>
          <li className="nav-item">
            <a className="nav-link" href="trangphuc">
              <strong>Trang phục</strong>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="tuisach">
              <strong>Túi sách</strong>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="giaydep">
              <strong>Giày dép</strong>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="phukien">
              <strong>Phụ kiện</strong>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
