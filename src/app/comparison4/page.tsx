import pageStyles from './page.module.scss';
import Header from '../../components/Header/Header';
import PropsBasedGrid from '../../components/PropsBasedGrid/PropsBasedGrid';
import PropsBasedCard from '../../components/PropsBasedCard/PropsBasedCard';
import CTA from '../../components/CTA/CTA';
import Footer from '../../components/Footer/Footer';

export const metadata = {
  title: 'React Components Comparison Page',
  description: 'Same functionality as comparison3.html but built with React components'
};

export default function Comparison4() {
  return (
    <div className="page-layout">
      <Header
        title="React Components Landing Page"
        subtitle="Same functionality as comparison3.html but with React components for better component reusability"
      />

      <main>
        <section className={pageStyles.contentSection}>
          <h2 className={pageStyles.sectionTitle}>
            Welcome to React Components
          </h2>

          <p className={pageStyles.paragraph}>
            This page demonstrates how we can use <strong>React components</strong> to create the same landing page functionality as our previous HTML examples, but with the benefits of:
          </p>

          <ul className={pageStyles.featuresList}>
            <li className={pageStyles.featureItem}>⚛️ <strong>React component reusability</strong> - Reusable, typed components</li>
            <li className={pageStyles.featureItem}>🎯 <strong>Type safety</strong> - TypeScript ensures component props are correct</li>
            <li className={pageStyles.featureItem}>🔧 <strong>Easy maintenance</strong> - Change a component once, update everywhere</li>
            <li className={pageStyles.featureItem}>🚀 <strong>Next.js integration</strong> - Built-in optimizations and server-side rendering</li>
            <li className={pageStyles.featureItem}>📦 <strong>CSS Modules</strong> - Scoped styling with no conflicts</li>
          </ul>

          <h3 className={pageStyles.subSectionTitle}>
            Features Overview
          </h3>

          <p className={pageStyles.paragraph}>
            Here are the same features as our HTML version, but now powered by React:
          </p>
        </section>

        <PropsBasedGrid>
          <PropsBasedCard
            emoji="🚀"
            title="Fast Loading"
            description="Static HTML loads instantly without any JavaScript frameworks or build processes. Perfect for simple landing pages that need maximum speed."
          />
          <PropsBasedCard
            emoji="📱"
            title="Responsive Design"
            description="CSS Grid and Flexbox ensure this page looks great on all devices, from mobile phones to desktop computers."
          />
          <PropsBasedCard
            emoji="🎨"
            title="Modern Styling"
            description="Clean, modern design with smooth transitions and hover effects using pure CSS without any external dependencies."
          />
          <PropsBasedCard
            emoji="♿"
            title="Accessible"
            description="Semantic HTML structure with proper heading hierarchy and alt text for screen readers and better SEO."
          />
          <PropsBasedCard
            emoji="🔧"
            title="Easy to Modify"
            description="Simple HTML and CSS that any developer can understand and modify without learning complex frameworks."
          />
          <PropsBasedCard
            emoji="🌐"
            title="Universal Support"
            description="Works in every browser, even older ones, without polyfills or transpilation. Maximum compatibility guaranteed."
          />
        </PropsBasedGrid>

        <section className={pageStyles.contentSection}>
          <h3 className={pageStyles.subSectionTitle}>
            How React Components Work
          </h3>

          <p className={pageStyles.paragraph}>
            React components allow you to write <strong>reusable UI pieces</strong> with props and state:
          </p>

          <pre className={pageStyles.codeBlock}>
            <code className={pageStyles.codeText}>
{`// This is a Props-Based React component
<PropsBasedCard
  emoji="🚀"
  title="Fast Loading"
  description="Static HTML loads instantly..."
/>`}
            </code>
          </pre>

          <p className={pageStyles.paragraph}>
            This gives you the best of both worlds:
          </p>
          <ul className={pageStyles.featuresList}>
            <li className={pageStyles.featureItem}>Content creators can work with familiar component APIs</li>
            <li className={pageStyles.featureItem}>Developers can create reusable, interactive components</li>
            <li className={pageStyles.featureItem}>Everything is type-safe and optimized by Next.js</li>
          </ul>
        </section>

        <CTA
          title="Ready to Compare?"
          description="You're viewing the React Components version! Compare this with the static HTML versions to see the differences in development experience and capabilities."
          buttonText="View Next.js Home"
          buttonHref="/"
        />
      </main>

      <Footer text="© 2025 React Components vs HTML Comparison. Built with Next.js and TypeScript." />
    </div>
  );
}
