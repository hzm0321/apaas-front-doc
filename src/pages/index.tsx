import React, {useEffect} from 'react';
import clsx from 'clsx';

import MDXContent from '@theme/MDXContent';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import OneWord from '@site/src/components/OneWord';

// import "choerodon-ui/lib/configure";
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className="hero__title">{siteConfig.title}</div>
        <OneWord />
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();

  useEffect(() => {
    const rootElement = document.documentElement;
    rootElement.style.fontSize = `${16}px`
  }, [])

  return (
    <MDXContent>
      <Layout
        title={`${siteConfig.title}`}
        description="Description will go into a meta tag in <head />">
        <HomepageHeader />
        <main>
          <HomepageFeatures />
        </main>
      </Layout>
    </MDXContent>
  );
}
