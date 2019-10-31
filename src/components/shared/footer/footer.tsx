import React from 'react';

import './footer.scss';

type Props = {};

const Footer: React.FC<Props> = props => {
  return (
    <footer>
      <div className="col-md-3"></div>
      <div className="col-md-3"></div>
      <div className="col-md-3"></div>
      <div className="col-md-3"></div>
    </footer>
  );
};

export default Footer;
