import React, { Component } from "react";
import { Modal, ModalHeader, ModalBody, ModalProps } from "reactstrap";
import './login.scss';

interface Props extends ModalProps {
  toggleRegisterModel: () => void;
}

const Login: React.FC<Props> = props => {
  const { isOpen, toggleModal, className, toggleRegisterModel } = props;

  return (
    <div>
      <Modal isOpen={isOpen} toggle={toggleModal} className={className}>
        <ModalHeader toggle={toggleModal} className="tilte">Đăng nhập</ModalHeader>
        <ModalBody>
        <div className="logreg-forms">
        <form className="form-signin">
          <div className="social-login">
              <button className="btn btn-primary" type="button"><span><i className="fa fa-facebook"></i> Đăng nhập với Facebook</span> </button>
              <button className="btn btn-danger" type="button" style={{width:'225px',marginLeft:'20px'}}><span><i className="fa fa-google"></i> Đăng nhập với Google</span> </button>
          </div>
          <p style={{marginTop:'5px',textAlign:"center"}}>hoặc</p>
          <div className="form-group">
			    		<input className="form-control" placeholder="Tên đăng nhập/ Email" name="email" type="text"/>
			    </div>
          <div className="form-group">
			    		<input className="form-control" placeholder="Mật khẩu" name="password" type="password" />
			    </div>
          <input className="btn btn-lg btn-success btn-block" type="submit" value="Đăng nhập"></input>
        </form>
        <hr></hr>
        </div>
          <button className="btn btn-dark" style={{width:'100%',textAlign:'center'}} onClick={toggleRegisterModel}>Đăng ký tài khoản</button>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default Login;
