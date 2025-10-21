import React from 'react';
import { X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/UI/dialog';
import styles from './Modal.module.css';

const Modal = ({ isOpen, onClose, title, children }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className={styles.content} data-testid="modal-content">
        <DialogHeader>
          <DialogTitle className={styles.title}>{title}</DialogTitle>
        </DialogHeader>
        <div className={styles.body}>{children}</div>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;