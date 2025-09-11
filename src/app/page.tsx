'use client';

import styles from '../components/MainContainer.module.css';
import pageStyles from './page.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { MDXProvider } from '@mdx-js/react';
import FeatureCard from '../components/FeatureCard';
import FeaturesGrid from '../components/FeaturesGrid';
import CTA from '../components/CTA';
import InfoBox from '../components/InfoBox';
import WarningBox from '../components/WarningBox';
import SuccessBox from '../components/SuccessBox';
import HighlightBox from '../components/HighlightBox';

import MDXContent from './content.mdx';

const components = {
  FeatureCard,
  FeaturesGrid,
  CTA,
  InfoBox,
  WarningBox,
  SuccessBox,
  HighlightBox,
  h1: (props: any) => <h1 className={pageStyles.h1} {...props} />,
  h2: (props: any) => <h2 className={pageStyles.h2} {...props} />,
  h3: (props: any) => <h3 className={pageStyles.h3} {...props} />,
  p: (props: any) => <p className={pageStyles.paragraph} {...props} />,
  ul: (props: any) => <ul className={pageStyles.list} {...props} />,
  li: (props: any) => <li className={pageStyles.listItem} {...props} />,
  code: (props: any) => <code className={pageStyles.inlineCode} {...props} />,
  pre: (props: any) => <pre className={pageStyles.codeBlock} {...props} />,
  strong: (props: any) => <strong className={pageStyles.strong} {...props} />,
  blockquote: (props: any) => <blockquote className={pageStyles.blockquote} {...props} />,
  table: (props: any) => <table className={pageStyles.table} {...props} />,
  thead: (props: any) => <thead className={pageStyles.tableHeader} {...props} />,
  tbody: (props: any) => <tbody className={pageStyles.tableBody} {...props} />,
  tr: (props: any) => <tr className={pageStyles.tableRow} {...props} />,
  th: (props: any) => <th className={pageStyles.tableHeaderCell} {...props} />,
  td: (props: any) => <td className={pageStyles.tableCell} {...props} />,
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
