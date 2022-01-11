import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import PhotoDetails from '../PhotoDetails';

export default function PhotoDetailsModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}></button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <PhotoDetails />
        </Modal>
      )}
    </>
  );
}
