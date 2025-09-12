'use client';

import { ReactNode } from 'react';

import styles from './FeaturesGrid.module.scss';
import FeatureCard from '../FeatureCard/FeatureCard';
import { groupBySequence } from '../utils';

interface FeaturesGridProps {
  children: ReactNode;
  flavour?: 'default' | 'compact' | 'highlighted';
}

export default function FeaturesGrid({ children, flavour = 'default' }: FeaturesGridProps) {
  const classes = flavour === 'default' ? styles.featuresGrid : `${styles.featuresGrid} ${styles[flavour]}`;
  const cards = groupBySequence(children, ['h3', 'p']);

  return (
    <section className={classes}>
      {cards.map((cardChildren, i) => (
        <FeatureCard key={i} flavour={flavour}>
          {cardChildren}
        </FeatureCard>
      ))}
    </section>
  )
}