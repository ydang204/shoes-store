import React, { Component } from 'react';

import './register.scss';

type Props = {};

type States = {};

class Register extends Component<Props, States> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return(
      <div className="container">
        Đăng ký
      </div>
    );
  }
}

export default Register;
