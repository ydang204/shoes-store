import React, { Component } from "react";
import { ModalProps, Modal, ModalHeader, ModalBody } from "reactstrap";

import "./register.scss";

interface Props extends ModalProps {}

const Register: React.FC<Props> = props => {
  const { isOpen, toggleModal, className, toggleRegisterModel } = props;

  return (
    <div>
      <Modal isOpen={isOpen} toggle={toggleModal} className={className}>
        <ModalHeader toggle={toggleModal}>Register modal</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          <p onClick={toggleRegisterModel}>Đăng ký tài khoản</p>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default Register;
