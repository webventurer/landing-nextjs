'use client';

import styles from './FeatureCard.module.scss';
import React from 'react';

interface FeatureCardProps {
  children: React.ReactNode;
  flavour?: 'compact' | 'highlighted';
}

export default function FeatureCard({ children, flavour }: FeatureCardProps) {
  let classes = styles.featureCard;
  if (flavour) {
    classes += ` ${styles[flavour]}`;
  }

  return (
    <article className={classes}>
      {children}
    </article>
  );
}
