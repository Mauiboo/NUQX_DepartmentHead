import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({ show, onClose, onConfirm }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      <div className="modal-content" style={{ backgroundColor: 'white', borderRadius: '8px', padding: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', width: '400px', height: '100px', top: '40%',  left: '700px' }}>
        <p className="modal-message">Are you sure you want to log out?</p>
        <div className="modal-actions" style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
          <button className="modal-cancel" onClick={onClose} style={{ color: '#35408E', backgroundColor: 'transparent', border: 'none', marginRight: '-130px', top: '50%' }}>No</button>
          <button className="modal-submit" onClick={onConfirm} style={{ color: '#35408E', backgroundColor: 'transparent', border: 'none',  marginRight: '-180px', top: '50%'}}>Yes</button>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

export default Modal;