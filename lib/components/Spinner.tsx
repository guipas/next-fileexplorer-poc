import Image from 'next/image'

import styles from './Spinner.module.css';

export const Spinner: React.FC = () => 
  <span className={styles.wrapper}>
    <Image width="16" height="16" src="/spinning.png" className={styles.spinner} alt="loading..." />
    <em>loading...</em>
  </span>
