import styles from './HighlightBox.module.css';

interface HighlightBoxProps {
  children: React.ReactNode;
}

export default function HighlightBox({ children }: HighlightBoxProps) {
  return (
    <div className={styles.highlightBox}>
      {children}
    </div>
  );
}
