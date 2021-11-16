import React from 'react';
import styles from './badge.module.css';

const Badge = ({ type }) => {
  return (
    <div className={`${styles.badge} ${type === "isNew" ? styles.badgeNew : styles.badgeFeatured}`}>
      <strong>{type === "isNew" ? "NEW!" : "FEATURED"}</strong>
    </div>
  )
}

export default Badge;