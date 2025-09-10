import styles from './WarningBox.module.css';

interface WarningBoxProps {
  children: React.ReactNode;
}

export default function WarningBox({ children }: WarningBoxProps) {
  return (
    <div className={styles.warningBox}>
      {children}
    </div>
  );
}
