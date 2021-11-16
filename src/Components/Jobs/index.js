import React from 'react';
import styles from './jobs.module.css';
import Job from '../Job/index';

const Jobs = () => {
  return (
    <div className={styles.container}>
      <Job />
    </div>
  )
}

export default Jobs;