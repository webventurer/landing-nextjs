'use client';

import styles from './FeaturesGrid.module.css';
import { ComponentProps } from 'react';

interface FeaturesGridProps extends ComponentProps<'section'> {
  children: React.ReactNode;
}

export default function FeaturesGrid({ children, ...props }: FeaturesGridProps) {
  return (
    <section className={styles.featuresGrid} {...props}>
      {children}
    </section>
  );
}
