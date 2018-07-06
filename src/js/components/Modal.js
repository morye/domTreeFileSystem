import React from 'react';

const Modal = props => {
  return (
    <div className='modal-container'>
      <div className='header'>
        <h2>{props.title}</h2>
        <span className='modal-close' />
      </div>
      <div className='content'>
        {props.children}
      </div>
      <div className='footer'>
        <button>Done</button>
      </div>
    </div>
  )
}

export default Modal;
