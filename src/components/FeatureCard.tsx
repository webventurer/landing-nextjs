'use client';

import styles from './FeatureCard.module.css';

interface FeatureCardProps {
  emoji: string;
  title: string;
  description: string;
}

export default function FeatureCard({ emoji, title, description }: FeatureCardProps) {
  const handleClick = () => {
    console.log(`Feature card clicked: ${emoji} ${title}`);
  };

  const handleMouseEnter = () => {
    console.log(`Hovering over feature: ${emoji} ${title}`);
  };

  return (
    <div
      className={styles.featureCard}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
    >
      <h3>{emoji} {title}</h3>
      <p>{description}</p>
    </div>
  );
}
