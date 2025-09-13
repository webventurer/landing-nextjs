'use client';

import clsx from 'clsx';
import styles from './PropsBasedGrid.module.scss';
import PropsBasedCard from '../PropsBasedCard/PropsBasedCard';
import React from 'react';

interface PropsBasedGridProps {
  children: React.ReactNode;
  flavour?: 'compact' | 'highlighted';
}

export default function PropsBasedGrid({ children, flavour }: PropsBasedGridProps) {
  const gridClass = clsx(
    styles.propsBasedGrid,
    flavour && styles[flavour]
  );

  // Pass flavour down to all PropsBasedCard children
  const childrenWithFlavour = React.Children.map(children, child => {
    if (React.isValidElement(child) && child.type === PropsBasedCard) {
      return React.cloneElement(child, { flavour } as React.ComponentProps<typeof PropsBasedCard>);
    }
    return child;
  });

  return <section className={gridClass}>{childrenWithFlavour}</section>;
}
