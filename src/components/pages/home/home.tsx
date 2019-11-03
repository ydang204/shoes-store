import React, { Component } from 'react';

import './home.scss';

type Props = {};

type States = {};

class Home extends React.Component<Props, States> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className="container home-container">
        <div className="row">Home works!</div>
      </div>
    );
  }
}

export default Home;
