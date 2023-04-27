import React, {ChangeEvent} from 'react';
import styles from 'atom/Input/TextField.module.css';

interface TextFieldProps extends React.HTMLProps<HTMLInputElement> {}

export const TextField = ({name = '', ...rest}: TextFieldProps) => {
  return (
    <div className={styles.root}>
      <label htmlFor={name} className={styles.label}>
        {name}
      </label>
      <div className={`${styles.input_box} flex-center`}>
        <input {...rest} name={name} className={styles.input} />
      </div>
    </div>
  );
};
