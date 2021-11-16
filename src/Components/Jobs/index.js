import React from 'react';
import styles from './jobs.module.css';
import Job from '../Job/index';
import Filter from '../Filter/index';

const Jobs = () => {
  return (
    <div className={styles.container}>
      <Filter />
      <Job />
    </div>
  )
}

export default Jobs;