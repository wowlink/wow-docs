import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    description: (
      <>
        Using WOW Link is as easy as adding a custom search engine in your favorite browsers.
      </>
    ),
  },
  {
    title: 'Fully Configurable',
    description: (
      <>
        WOW Link is based on GitHub, meaning that you can use all the GitHub tools you like.
      </>
    ),
  },
  {
    title: 'Open Source',
    description: (
      <>
        WOW Link is open source, so feel free to customize it to whatever you want.
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
