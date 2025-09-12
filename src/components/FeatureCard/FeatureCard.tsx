'use client';

import styles from './FeatureCard.module.scss';
import React from 'react';

interface FeatureCardProps {
  children: React.ReactNode;
  flavour?: string;
}

export default function FeatureCard({ children, flavour = 'default' }: FeatureCardProps) {
  let classes = styles.default;

  if (flavour && flavour !== 'default') {
    classes += ` ${styles[flavour]}`;
  }

  return (
    <article className={classes}>
      {children}
    </article>
  );
}
