import styles from './Footer.module.css';

interface FooterProps {
  text: string;
}

export default function Footer({ text }: FooterProps) {
  return (
    <footer className={styles.footerContainer}>
      <p>{text}</p>
    </footer>
  );
}
