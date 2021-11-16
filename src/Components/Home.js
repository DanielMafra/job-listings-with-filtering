import React from 'react';
import styles from './Home.module.css';
import Jobs from './Jobs/index';

const Home = () => {
  const isMobile = window.innerWidth <= 375 ? true : false;

  return (
    <>
      <header className={`${styles.header} ${isMobile ? styles.headerMobileBg : styles.headerDesktopBg}`}></header>
      <Jobs />
    </>
  );
};

export default Home;