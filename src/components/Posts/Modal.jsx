import React, { useState } from 'react';
import './CardPosts.css' // Importamos el archivo de CSS

export const Modal = ({ onCreate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      {}
      <button onClick={openModal} className="btn btn-primary">
        Open Modal
      </button>

      {}
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h1 className="modal-title">Modal Title</h1>
              <button className="btn-close" onClick={closeModal}>
                ×
              </button>
            </div>
            <div className="modal-body">
              <p>Content of the modal goes here...</p>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={closeModal}>
                Close
              </button>
              <button className="btn btn-primary" onClick={onCreate}>
                Save changes
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
