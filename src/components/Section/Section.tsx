import styles from './Section.module.scss';

interface SectionProps {
  children: React.ReactNode;
  flavour: 'strong' | 'subtle';
}

export default function Section({ children, flavour }: SectionProps) {

  let classes = styles.section;

  if (flavour) classes += ` ${styles[flavour]}`;

  return (
    <section className={classes}>
      {children}
    </section>
  );
}
