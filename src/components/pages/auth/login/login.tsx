import React, { Component } from "react";
import { Modal, ModalHeader, ModalBody, ModalProps } from "reactstrap";
import "./login.scss";

import FacebookLogin from "react-facebook-login";

import GoogleLogin from "react-google-login";

interface Props extends ModalProps {
  toggleRegisterModel: () => void;
}

const Login: React.FC<Props> = props => {
  const { isOpen, toggleModal, className, toggleRegisterModel } = props;

  const responseFacebook = (response: any) => {
    console.log(response);
  };

  const responseGoogle = (response: any) => {
    console.log(response);
  };

  const facebookAppId = "999027390441007";
  const googleClientId =
    "333428677572-7un92vds8d1i0fmco88jb3tqrhbn9ale.apps.googleusercontent.com";

  return (
    <div>
      <Modal isOpen={isOpen} toggle={toggleModal} className={className}>
        <ModalHeader toggle={toggleModal} className="tilte">
          Đăng nhập
        </ModalHeader>
        <ModalBody>
          <div className="logreg-forms">
            <form className="form-signin">
              <div className="social-login">
                <FacebookLogin
                  appId={facebookAppId}
                  fields="name,email,picture"
                  callback={responseFacebook}
                  cssClass="login-facebook"
                  icon={<i className="fa fa-facebook" />}
                  textButton="&nbsp;&nbsp;Đăng nhập với Facebook"
                />
                <GoogleLogin
                  className="login-google"
                  icon={false}
                  clientId={googleClientId}
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                >
                  <div className="google">
                    <i className="fa fa-google-plus" />
                    <span>&nbsp;Đăng nhập với Google</span>{" "}
                  </div>
                </GoogleLogin>
              </div>
              <br />
              <div className="form-group">
                <input
                  className="form-control"
                  placeholder="Tên đăng nhập/ Email"
                  name="email"
                  type="text"
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  placeholder="Mật khẩu"
                  name="password"
                  type="password"
                />
              </div>
              <input
                className="btn btn-lg btn-warning btn-block"
                type="submit"
                value="Đăng nhập"
              ></input>
            </form>
            <hr></hr>
          </div>
          Chưa có tài khoản?
          <a href="#" onClick={toggleRegisterModel}>
            &nbsp;Đăng ký ngay!
          </a>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default Login;
