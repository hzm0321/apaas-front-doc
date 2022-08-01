import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '技术共享',
    Svg: require('@site/static/img/home/share.svg').default,
    description: (
      <>
        分享 apaas 团队前端技术解决方案
      </>
    ),
  },
  {
    title: '飞搭',
    Svg: require('@site/static/img/home/code.svg').default,
    description: (
      <>
        基于汉得数字化平台 HZERO 结合低代码理念打造的融合化 aPaaS 低代码平台
      </>
    ),
  },
  {
    title: '对外赋能',
    Svg: require('@site/static/img/home/teach.svg').default,
    description: (
      <>
        介绍 aPaaS 团队对外赋能的技术和服务
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
