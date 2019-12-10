import React, { Component } from "react";
import {
  ModalProps,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button
} from "reactstrap";

import "./success-payment-modal.scss";
import { currencyFormat } from "../../../../_cores/utils/helpers";

interface Props extends ModalProps {
  amount: number;
  toggleModal: any;
}

const PaymentSuccessModal: React.FC<Props> = props => {
  const { isOpen, toggleModal, className, amount } = props;
  return (
    <div>
      <Modal isOpen={isOpen} toggle={toggleModal} className={className}>
        <ModalHeader toggle={toggleModal}>Thanh toán thành công</ModalHeader>
        <ModalBody>
          Thanh toán MoMo thành công với số tiền {currencyFormat(amount)}.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggleModal}>
            Ok
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default PaymentSuccessModal;
