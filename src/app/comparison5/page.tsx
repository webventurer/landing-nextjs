'use client';

import { MDXProvider } from '@mdx-js/react';

import contentStyles from './page.module.scss';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import FeatureCard from '@/components/FeatureCard/FeatureCard';
import FeaturesGrid from '@/components/FeaturesGrid/FeaturesGrid';
import CTA from '@/components/CTA/CTA';
import InfoBox from '@/components/InfoBox/InfoBox';
import WarningBox from '@/components/WarningBox/WarningBox';
import SuccessBox from '@/components/SuccessBox/SuccessBox';
import HighlightBox from '@/components/HighlightBox/HighlightBox';
import Section from '@/components/Section/Section';

import { withDisplayNames } from '@/components/utils';

import MDXContent from './content.mdx';

const components = withDisplayNames({
  FeatureCard,
  FeaturesGrid,
  CTA,
  InfoBox,
  WarningBox,
  SuccessBox,
  HighlightBox,
  Section,
  // Note: HTML elements now use global typography + contextual .content styling
  // No more className assignments needed - embracing semantic HTML
});

export default function Comparison5() {
  return (
    <div className="page-layout">
      <Header
        title="MDX + React Components Landing Page"
        subtitle="Enhanced version with MDX content and React components for the best authoring experience"
      />

      <main className={contentStyles.content}>
        <MDXProvider components={components}>
          <MDXContent />
        </MDXProvider>
      </main>

      <Footer text="© 2025 MDX + React Components Comparison. Built with Next.js, MDX, and TypeScript." />
    </div>
  );
}
