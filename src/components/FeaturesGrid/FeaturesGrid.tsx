'use client';

import styles from './FeaturesGrid.module.css';
import FeatureCard from '../FeatureCard/FeatureCard';
import React from 'react';

interface FeaturesGridProps {
  children: React.ReactNode;
  flavour?: 'default' | 'compact' | 'highlighted';
}

const processElementsIntoCards = (elements: React.ReactNode[], flavour: string) => {
  const cards: React.ReactNode[] = [];

  for (let cardIndex = 0; cardIndex < elements.length; cardIndex += 2) {
    const h3 = elements[cardIndex];
    const p = elements[cardIndex + 1];

    cards.push(
      <FeatureCard key={cardIndex} flavour={flavour}>
        {h3}
        {p}
      </FeatureCard>
    );
  }

  return cards;
};

const gridStyleFor = (flavour: string) => {
  return flavour === 'default'
    ? styles.featuresGrid
    : `${styles.featuresGrid} ${styles[flavour]}`;
};

export default function FeaturesGrid({ children, flavour = 'default' }: FeaturesGridProps) {
  const classes = gridStyleFor(flavour);

  const elements = React.Children.toArray(children).filter(child => {
    if (!React.isValidElement(child)) return false;

    const elementType = (child.type as any)?.name;
    const isHeadingOrParagraph = ['h3', 'p'].includes(elementType);

    return isHeadingOrParagraph;
  });

  const cards = processElementsIntoCards(elements, flavour);

  return <section className={classes}>{cards}</section>;
}
