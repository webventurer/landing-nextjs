'use client';

import styles from './FeaturesGrid.module.css';
import FeatureCard from './FeatureCard';

const features = [
  {
    emoji: "🚀",
    title: "Fast Loading",
    description: "Static HTML loads instantly without any JavaScript frameworks or build processes. Perfect for simple landing pages that need maximum speed."
  },
  {
    emoji: "📱",
    title: "Responsive Design",
    description: "CSS Grid and Flexbox ensure this page looks great on all devices, from mobile phones to desktop computers."
  },
  {
    emoji: "🎨",
    title: "Modern Styling",
    description: "Clean, modern design with smooth transitions and hover effects using pure CSS without any external dependencies."
  },
  {
    emoji: "♿",
    title: "Accessible",
    description: "Semantic HTML structure with proper heading hierarchy and alt text for screen readers and better SEO."
  },
  {
    emoji: "🔧",
    title: "Easy to Modify",
    description: "Simple HTML and CSS that any developer can understand and modify without learning complex frameworks."
  },
  {
    emoji: "🌐",
    title: "Universal Support",
    description: "Works in every browser, even older ones, without polyfills or transpilation. Maximum compatibility guaranteed."
  }
];

export default function FeaturesGrid() {
  return (
    <section className={styles.featuresGrid}>
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          emoji={feature.emoji}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </section>
  );
}
