import React, { Component } from 'react';

type Props = {};

type States = {};

class Login extends Component<Props, States> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className="modal fade" id="myModal" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
        <h2 className="modal-title" id="myModalLabel" style={{color: 'blue'}}>ĐĂNG NHẬP</h2>
      </div>
      
            
        </div>
      </div> {/*modal-body*/}
    </div>
    );
  }
}

export default Login;
