import React from "react";

import "./check-out.scss";

interface Props {}

interface States {}

class Checkout extends React.Component<Props, States> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className="check-out-container container">Checkout page works!</div>
    );
  }
}

export default Checkout;
