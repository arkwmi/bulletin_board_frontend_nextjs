import React from 'react';
import styles from './Modal.module.css';

interface ModalProps {
  show: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const Modal: React.FC<ModalProps> = ({ show, onClose, onConfirm }) => {
  if (!show) return null;

  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modal}>
        <p>本当に削除しますか？</p>
        <button className={styles.confirmButton} onClick={onConfirm}>はい</button>
        <button className={styles.cancelButton} onClick={onClose}>キャンセル</button>
      </div>
    </div>
  );
};

export default Modal;
