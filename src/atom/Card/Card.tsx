import React from 'react';
import styles from 'atom/Card/Card.module.css';
import {ChildrenProps} from 'static/types';

interface CardProps extends ChildrenProps {
  title?: string;
}

export const Card = ({children, title = 'Login'}: CardProps) => (
  <div className={`${styles.card} flex-center column`}>
    <h2 className='text-center mt-0 padding '>{title}</h2>
    {children}
  </div>
);
