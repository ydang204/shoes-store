import React from 'react';

import './footer.scss';

type Props = {};

const Footer: React.FC<Props> = props => {
  return (
    <footer>
      <div className="col-md-3">Logo</div>
      <div className="col-md-3">Infor</div>
      <div className="col-md-3">Infor</div>
      <div className="col-md-3">Infor</div>
    </footer>
  );
};

export default Footer;
