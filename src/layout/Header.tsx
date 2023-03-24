import React from 'react';
import styles from '@/layout/layout.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerLogo}>logo</div>
      <div className={styles.headerTitle}>
        欢迎来到
        <a href="http://shenjiancheng.com/" className={styles.headerTitleLink}>
          shenjiancheng.com
        </a>
      </div>
    </header>
  );
};

export default Header;
