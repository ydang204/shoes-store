import React, { Component } from 'react';

import './home.scss';

type Props = {};

type States = {};

class Home extends React.Component<Props, States> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return <p>Home works!</p>;
  }
}

export default Home;
