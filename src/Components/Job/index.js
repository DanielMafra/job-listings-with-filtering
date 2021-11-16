import React from 'react';
import styles from './job.module.css';
import Description from '../Description/index';

const Job = ({ job }) => {

  return (
    <div className={`${styles.job} ${job.featured && styles.jobFeatured}`}>
      <div className={styles.jobInfos}>
        <img src={job.logo} alt="" />
        <Description job={job} />
      </div>
    </div>
  )
}

export default Job;