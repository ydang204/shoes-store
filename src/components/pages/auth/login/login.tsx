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
    "1040263280986-ksk8a26hch9okcs2acpsf7e58t0d1bi0.apps.googleusercontent.com";

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
<<<<<<< HEAD
                {/*<GoogleLogin
=======
                {/* <GoogleLogin
>>>>>>> 1dbe6c86c5fdf862ec697eddfaf5e620518c0b5f
                  className="login-google"
                  icon={false}
                  clientId={googleClientId}
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                >
                  <div className='google'>
                    <i className="fa fa-google-plus" />
                    <span>&nbsp;Đăng nhập với Google</span> </div>
<<<<<<< HEAD
                </GoogleLogin>*/}
=======
                </GoogleLogin> */}
>>>>>>> 1dbe6c86c5fdf862ec697eddfaf5e620518c0b5f
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
                className="btn btn-lg btn-success btn-block"
                type="submit"
                value="Đăng nhập"
              ></input>
            </form>
            <hr></hr>
          </div>
          <button
            className="btn btn-dark"
            style={{ width: "100%", textAlign: "center" }}
            onClick={toggleRegisterModel}
          >
            Đăng ký tài khoản
          </button>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default Login;
