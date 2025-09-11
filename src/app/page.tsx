'use client';

import styles from '../components/page.module.css';
import pageStyles from './page.module.css';
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

import MDXContent from './content.mdx';

import { ComponentProps } from 'react';

const components = {
  FeatureCard,
  FeaturesGrid,
  CTA,
  InfoBox,
  WarningBox,
  SuccessBox,
  HighlightBox,
  h1: (props: ComponentProps<'h1'>) => <h1 className={pageStyles.h1} {...props} />,
  h2: (props: ComponentProps<'h2'>) => <h2 className={pageStyles.h2} {...props} />,
  h3: (props: ComponentProps<'h3'>) => <h3 className={pageStyles.h3} {...props} />,
  p: (props: ComponentProps<'p'>) => <p className={pageStyles.paragraph} {...props} />,
  ul: (props: ComponentProps<'ul'>) => <ul className={pageStyles.list} {...props} />,
  li: (props: ComponentProps<'li'>) => <li className={pageStyles.listItem} {...props} />,
  code: (props: ComponentProps<'code'>) => <code className={pageStyles.inlineCode} {...props} />,
  pre: (props: ComponentProps<'pre'>) => <pre className={pageStyles.codeBlock} {...props} />,
  strong: (props: ComponentProps<'strong'>) => <strong className={pageStyles.strong} {...props} />,
  blockquote: (props: ComponentProps<'blockquote'>) => <blockquote className={pageStyles.blockquote} {...props} />,
  table: (props: ComponentProps<'table'>) => <table className={pageStyles.table} {...props} />,
  thead: (props: ComponentProps<'thead'>) => <thead className={pageStyles.tableHeader} {...props} />,
  tbody: (props: ComponentProps<'tbody'>) => <tbody className={pageStyles.tableBody} {...props} />,
  tr: (props: ComponentProps<'tr'>) => <tr className={pageStyles.tableRow} {...props} />,
  th: (props: ComponentProps<'th'>) => <th className={pageStyles.tableHeaderCell} {...props} />,
  td: (props: ComponentProps<'td'>) => <td className={pageStyles.tableCell} {...props} />,
};

export default function HomePage() {
  return (
    <div className={styles.mainContainer}>
      <Header
        title="Landing Pages Technology Comparison"
        subtitle="Exploring different approaches to building web pages - from basic HTML to React + MDX"
      />

      <main className={pageStyles.content}>
        <MDXProvider components={components}>
          <MDXContent />
        </MDXProvider>
      </main>

      <Footer text="© 2025 Landing Pages Project. Built with Next.js, React, and MDX." />
    </div>
  );
}
