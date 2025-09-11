import styles from './Header.module.scss';

interface HeaderProps {
  title: string;
  subtitle: string;
}

export default function Header({ title, subtitle }: HeaderProps) {
  return (
    <header className={styles.headerContainer}>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </header>
  );
}
