import React from 'react';
import styles from './BoxLayout.module.css';
import {ChildrenProps} from 'static/types';

interface BoxLayoutProps extends ChildrenProps {}

export const BoxLayout = ({children}: BoxLayoutProps) => {
  return <div className={styles.box}>{children}</div>;
};
