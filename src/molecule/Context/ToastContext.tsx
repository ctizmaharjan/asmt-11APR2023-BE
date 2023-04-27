import Toast from 'atom/Toast/Toast';
import React, {useState, createContext, useContext} from 'react';
import {ChildrenProps} from 'static/types';
import styles from 'atom/Toast/Toast.module.css';

interface ToastContextProps {
  showToast: (
    message: string,
    duration?: number,
    type?: 'success' | 'error'
  ) => void;
}

const ToastContext = createContext<ToastContextProps>({showToast: () => null});

interface ToastProviderProps extends ChildrenProps {}

const ToastProvider = ({children}: ToastProviderProps) => {
  const [toasts, setToasts] = useState<any[]>([]);

  const showToast = (message: string, duration = 3000, type = 'success') => {
    const toast = {message, duration, type};
    setToasts((prevState) => [...prevState, toast]);

    setTimeout(() => {
      setToasts((prevState) => prevState.filter((t) => t !== toast));
    }, duration);
  };

  return (
    <ToastContext.Provider value={{showToast}}>
      {children}
      <div className={styles.toastContainer}>
        {toasts.map((toast, index) => (
          <Toast
            key={`${toast.message}-${index}`}
            message={toast.message}
            duration={toast.duration}
            type={toast.type}
            onClose={() =>
              setToasts((prevState) => prevState.filter((t) => t !== toast))
            }
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = (): ToastContextProps => useContext(ToastContext);

export default ToastProvider;
