import React from 'react';
import styles from './infos.module.css';

const Infos = ({ job }) => {
  return (
    <ul className={styles.infos}>
      <li>{job.postedAt}</li>
      <li>{job.contract}</li>
      <li>{job.location}</li>
    </ul>
  )
}

export default Infos;