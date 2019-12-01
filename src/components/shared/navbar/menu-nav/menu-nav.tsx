import React from "react";

import "./menu-nav.scss";
import { Link } from "react-router-dom";
import MenuDropdown from "../menu-dropdown/menu-dropdown";

type Props = {};

const MenuNav: React.FC<Props> = props => {
  return (
    <div className="menu-nav">
      <Link to="/">
        <button className="btn menu-item">Trang chủ</button>
      </Link>
      <button className="btn menu-item" >
        <MenuDropdown />
      </button>
      <button className="btn menu-item">Túi xách</button>
      <button className="btn menu-item">Giày dép</button>
      <button className="btn menu-item">Phụ kiện</button>
    </div>
  );
};

export default MenuNav;
