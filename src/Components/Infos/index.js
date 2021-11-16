import React from 'react';
import styles from './infos.module.css';

const Infos = () => {
  return (
    <ul className={styles.infos}>
      <li>1d ago</li>
      <li>Full Time</li>
      <li>USA only</li>
    </ul>
  )
}

export default Infos;