'use client';

import clsx from 'clsx';
import styles from './PropsBasedCard.module.scss';

interface PropsBasedCardProps {
  emoji: string;
  title: string;
  description: string;
  flavour?: 'default' | 'compact' | 'highlighted';
}

export default function PropsBasedCard({
  emoji,
  title,
  description,
  flavour = 'default'
}: PropsBasedCardProps) {
  const classes = clsx(
    styles.default,
    {
      [styles[flavour]]: flavour !== 'default'
    }
  );

  return (
    <div className={classes}>
      <div className={styles.emoji}>{emoji}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
