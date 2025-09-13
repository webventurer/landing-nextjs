'use client';

import { ReactNode } from 'react';

import styles from './FeaturesGrid.module.scss';
import FeatureCard from '../FeatureCard/FeatureCard';
import { groupBySequence } from '../utils';

interface FeaturesGridProps {
  children: ReactNode;
  flavour?: 'compact' | 'highlighted';
}

export default function FeaturesGrid({ children, flavour }: FeaturesGridProps) {
  const classes = flavour ? `${styles.featuresGrid} ${styles[flavour]}` : styles.featuresGrid;
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
