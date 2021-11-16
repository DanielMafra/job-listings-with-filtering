import React from 'react';
import styles from './job.module.css';
import Description from '../Description/index';

const Job = () => {
  return (
    <div className={styles.job}>
      <div className={styles.jobInfos}>
        <img src="../../images/photosnap.svg" alt="" />
        <Description />
      </div>
    </div>
  )
}

export default Job;