import React from 'react';
import styles from './description.module.css';
import Badge from '../Badge/index';
import Infos from '../Infos/index';
import Tag from '../Tag/index';

const Description = () => {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.title}>
          <strong className={styles.company}>Photosnap</strong>
          <Badge />
        </div>
        <strong className={styles.type}>Senior Frontend Developer</strong>
        <Infos />
      </div>
      <div className={styles.tags}>
        <Tag />
      </div>
    </div>
  )
}

export default Description;