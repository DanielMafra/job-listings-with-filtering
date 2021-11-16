import React, { useContext } from 'react';
import { GlobalContext } from '../../Contexts/GlobalContext';
import styles from './filter.module.css';

const Filter = () => {
  const { filter } = useContext(GlobalContext);

  return (
    <div className={styles.filter}>
      <ul className={styles.tags}>
        {filter != '' && filter.map(item => <li>{item}<div className={styles.remove}>
          <img src="../../images/icon-remove.svg" alt="" />
        </div></li>)}
      </ul>
      <button>Clear</button>
    </div>
  )
}

export default Filter;