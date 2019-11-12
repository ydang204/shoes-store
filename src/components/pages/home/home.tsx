import React, { Component } from 'react';
import ProductItem from '../../shared/product-item/product-item';

import './home.scss';

type Props = {};

type States = {};

class Home extends React.Component<Props, States> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-4">
            <ProductItem />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
