'use client';

import contentStyles from './page.module.scss';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { MDXProvider } from '@mdx-js/react';
import FeatureCard from '../components/FeatureCard/FeatureCard';
import FeaturesGrid from '../components/FeaturesGrid/FeaturesGrid';
import CTA from '../components/CTA/CTA';
import InfoBox from '../components/InfoBox/InfoBox';
import WarningBox from '../components/WarningBox/WarningBox';
import SuccessBox from '../components/SuccessBox/SuccessBox';
import HighlightBox from '../components/HighlightBox/HighlightBox';

import { withDisplayNames } from '../components/utils';

import MDXContent from './content.mdx';

import { ComponentProps } from 'react';

const components = withDisplayNames({
  FeatureCard,
  FeaturesGrid,
  CTA,
  InfoBox,
  WarningBox,
  SuccessBox,
  HighlightBox,
  // Note: HTML elements now use global typography + contextual .content styling
  // No more className assignments needed - embracing semantic HTML
});

export default function HomePage() {
  return (
    <div className="page-layout">
      <Header
        title="Landing Pages Technology Comparison"
        subtitle="Exploring different approaches to building web pages - from basic HTML to React + MDX"
      />

      <main className={contentStyles.content}>
        <MDXProvider components={components}>
          <MDXContent />
        </MDXProvider>
      </main>

      <Footer text="© 2025 Landing Pages Project. Built with Next.js, React, and MDX." />
    </div>
  );
}
