import React from "react";

import "./menu-nav.scss";

type Props = {};

const MenuNav: React.FC<Props> = props => {
  return (
    <div className="menu-nav">
      <button className="btn menu-item">Trang chủ</button>
      <button className="btn menu-item">Trang phục</button>
      <button className="btn menu-item">Túi xách</button>
      <button className="btn menu-item">Giày dép</button>
      <button className="btn menu-item">Phụ kiện</button>
    </div>
  );
};

export default MenuNav;
