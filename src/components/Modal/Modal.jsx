
import { createPortal } from 'react-dom';
import React, { Component } from 'react';
import PropTypes from 'prop-types';


const ModalRoot = document.querySelector('#ModalRoot');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.keyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.keyDown);
  }

  keyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  onOverlayClose = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  modalStyle = {
    maxWidth: 'calc(100vw - 48px)',
    maxHeight: 'calc(100vh - 24px)',
  };

  overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: 1200,
  };

  render() {
    const { largeImageURL } = this.props.image;
    return createPortal(
      <div onClick={this.onOverlayClose} style={this.overlayStyle}>
      <div style={this.modalStyle}>
        <img src={largeImageURL} alt="img" />
      </div>
    </div>,
      ModalRoot
    );
  }
}

export default Modal;

Modal.propTypes = {
  image: PropTypes.object,
  onClose: PropTypes.func,
};