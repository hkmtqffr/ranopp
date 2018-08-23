import React from 'react';
import Modal from 'react-modal';

function OptionModal(props) {
  return (
    <Modal
      isOpen={!!props.selectedOption}
      contentLable="selected option"
      onRequestClose={props.onHandleClose}
      contentLabel="aria-label"
      closeTimeoutMS={200}
      className="modal"
    >
      <h3>Selected Option</h3>
      {props.selectedOption && <p className="modal__text">{props.selectedOption}</p>}
      <button className="modal__button" onClick={props.onHandleClose}>
        <i className="fa fa-times" aria-hidden="true"></i>
      </button>
    </Modal>

  )
}

Modal.setAppElement('body');

export default OptionModal;