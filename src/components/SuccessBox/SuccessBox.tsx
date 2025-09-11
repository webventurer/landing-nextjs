import styles from './SuccessBox.module.css';

interface SuccessBoxProps {
  children: React.ReactNode;
}

export default function SuccessBox({ children }: SuccessBoxProps) {
  return (
    <div className={styles.successBox}>
      {children}
    </div>
  );
}
