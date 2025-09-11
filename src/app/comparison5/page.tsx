'use client';

import styles from '../../components/MainContainer.module.css';
import pageStyles from './page.module.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { MDXProvider } from '@mdx-js/react';
import FeatureCard from '../../components/FeatureCard';
import FeaturesGrid from '../../components/FeaturesGrid';
import CTA from '../../components/CTA';
import InfoBox from '../../components/InfoBox';
import WarningBox from '../../components/WarningBox';
import SuccessBox from '../../components/SuccessBox';
import HighlightBox from '../../components/HighlightBox';
import Section from '@/components/Section';

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
  Section,
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

export default function Comparison5() {
  return (
    <div className={styles.mainContainer}>
      <Header
        title="MDX + React Components Landing Page"
        subtitle="Enhanced version with MDX content and React components for the best authoring experience"
      />

      <main className={pageStyles.content}>
        <MDXProvider components={components}>
          <MDXContent />
        </MDXProvider>
      </main>

      <Footer text="© 2025 MDX + React Components Comparison. Built with Next.js, MDX, and TypeScript." />
    </div>
  );
}
