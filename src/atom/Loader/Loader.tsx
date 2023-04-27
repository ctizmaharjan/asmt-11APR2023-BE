import React from 'react';

import styles from './Loader.module.css';

type LoaderProps = {};

export const Loader = ({}: LoaderProps) => (
  <div className={styles.loaderContainer}>
    <div className={styles.loader} />
  </div>
);
