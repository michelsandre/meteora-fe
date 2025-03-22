import styles from './styles.module.css';

import { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
};
