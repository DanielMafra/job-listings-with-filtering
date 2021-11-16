import React from 'react';
import styles from './filter.module.css';

const Filter = () => {
  return (
    <div className={styles.filter}>
      <ul>
        <li>Frontend
          <div className={styles.remove}>
            <img src="../../images/icon-remove.svg" alt="" />
          </div>
        </li>
      </ul>
      <button>Clear</button>
    </div>
  )
}

export default Filter;