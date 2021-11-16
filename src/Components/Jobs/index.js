import React, { useContext } from 'react';
import { GlobalContext } from '../../Contexts/GlobalContext';
import styles from './jobs.module.css';
import Job from '../Job/index';
import Filter from '../Filter/index';

const Jobs = () => {
  const { jobs, filter } = useContext(GlobalContext);

  return (
    <div className={`${styles.container} ${filter == '' && styles.pddTop}`}>
      {filter != '' && <Filter />}
      {jobs.map(job => {
        return <Job key={job.id} job={job} />
      })}
    </div>
  )
}

export default Jobs;