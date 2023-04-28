import React from 'react';
import styles from 'atom/Button/Button.module.css';
import {ChildrenProps} from 'static/types';

type ButtonVariant = 'primary' | 'basic' | 'danger';
interface ButtonProps
  extends ChildrenProps,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: ButtonVariant;
  onClick?: () => void;
}

export const Button = ({color = 'basic', children, ...rest}: ButtonProps) => {
  const btnClassName = `button-${color}`;
  return (
    <button
      className={`${styles.button} flex-1 ${styles[btnClassName]}`}
      {...rest}>
      {children}
    </button>
  );
};
