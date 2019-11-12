import React, { Component } from "react";
import { ModalProps, Modal, ModalHeader, ModalBody } from "reactstrap";

import "./register.scss";

interface Props extends ModalProps {}

const Register: React.FC<Props> = props => {
  const { isOpen, toggleModal, className, toggleRegisterModel } = props;

  return (
    <div>
      <Modal isOpen={isOpen} toggle={toggleModal} className={className}>
        <ModalHeader toggle={toggleModal}>Đăng ký thông tin</ModalHeader>
        <ModalBody>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="form-group">
                  <label htmlFor="fname">Tên đăng nhập/ Email:</label>
                  <input type="text" className="form-control mt-2" placeholder="Tên đăng nhập/ Email" />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Mật khẩu:</label>
                  <input type="password" className="form-control mt-2" placeholder="Mật khẩu" />
                </div>
                <div className="form-group">
                  <label htmlFor="username">Họ và tên:</label>
                  <input type="text" className="form-control mt-2" placeholder="Họ và tên" />
                </div>
                <div className="form-group">
                  <label htmlFor="address">Địa chỉ:</label>
                  <input type="text" className="form-control mt-2" placeholder="Địa chỉ" />
                </div>
                <div className="form-group">
                  <label htmlFor="Email">Email:</label>
                  <input type="email" className="form-control mt-2" placeholder="Địa chỉ email" />
                </div>
                <div className="form-group">
                  <label htmlFor="number">Số điện thoại liên lạc:</label>
                  <input type="text" className="form-control mt-2" placeholder="Số điện thoại" />
                </div>
                <input className="btn btn-lg btn-success btn-block" type="submit" value="Đăng ký"></input>
              </div>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default Register;
