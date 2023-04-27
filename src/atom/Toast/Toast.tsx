import React, {useState, useEffect} from 'react';
import styles from 'atom/Toast/Toast.module.css';

export interface ToastProps {
  message: string;
  duration: number;
  type: 'success' | 'error';
  onClose: () => void;
}

const Toast = ({message, duration, type, onClose}: ToastProps) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (message) {
      setShow(true);
      timer = setTimeout(() => {
        setShow(false);
      }, duration);
    }
    return () => clearTimeout(timer);
  }, [message, duration]);

  const handleClick = () => {
    setShow(false);
    onClose();
  };

  const handleAnimationEnd = () => {
    setShow(false);
    onClose();
  };

  return (
    <div
      onAnimationEnd={handleAnimationEnd}
      className={`${styles.toast} ${show ? styles.show : ''} ${
        type === 'success' ? styles.success : styles.error
      }`}>
      <span className={styles.message}>{message}</span>
      <button className={styles.close} onClick={handleClick}>
        &times;
      </button>
    </div>
  );
};

export default Toast;
