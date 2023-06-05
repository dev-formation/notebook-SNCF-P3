import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Faire face au challenges',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Après avoir réfléchis <br />
        1. Je recherche sur internet (documentation,forum...) <br />
        2. Je demande conseil aux collègues <br />
        3. Je sollicite le formateur
      </>
    ),
  },
  {
    title: 'Le mindset des dev ?',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        1. Apprendre tout au long de sa carrière <br />
        2. Les problématiques sont positives : problématique = possibilité
        d'apprendre <br />
        3. Savoir chercher : vérifier ses sources, dates, suivre les docs
        officielles <br />
        4. Collaborer en groupe <br />
        5. Chercher à améliorer la qualité et la sécurité du code produit
      </>
    ),
  },
  {
    title: 'Prendre plaisir à trouver des solutions',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        La formation est là pour vous accompagner dans votre démarche de
        reconversion de la manière la plus professionnelle et épanouissante
        possible
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className='text--center'>
        <Svg className={styles.featureSvg} role='img' />
      </div>
      <div className='text--center padding-horiz--md'>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className='container'>
        <div className='row'>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
