import React, { useContext } from 'react';
import { GlobalContext } from '../../Contexts/GlobalContext';
import styles from './tag.module.css';

const Tag = ({ title }) => {
  const { filter, setFilter } = useContext(GlobalContext);

  function handleClick() {
    setFilter(oldArray => [...oldArray, title]);
    console.log(filter)
  }

  return (
    <div className={styles.tag} onClick={handleClick}>
      <strong>{title}</strong>
    </div>
  )
}

export default Tag;