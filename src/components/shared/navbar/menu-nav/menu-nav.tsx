import React from 'react';

import './menu-nav.scss';

type Props = {};

const MenuNav: React.FC<Props> = props => {
  return (
    <div className="menu-nav">
      <a href="" className="menu-item">
        <i className="fa fa-home"></i>Trang chủ
      </a>
      <a href="" className="menu-item">
        Trang phục
      </a>
      <a href="" className="menu-item">
        Túi xách
      </a>
      <a href="" className="menu-item">
        Giày dép
      </a>
      <a href="" className="menu-item">
        Phụ kiện
      </a>
    </div>
  );
};

export default MenuNav;
