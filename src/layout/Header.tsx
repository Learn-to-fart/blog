import React from 'react';
import styles from '@/layout/layout.module.scss';

const Header: React.FC = () => {
  const menu: { name: string; path: string }[] = [
    { name: '首页', path: '/home' },
    { name: '博客', path: '/article' }
  ];
  return (
    <header className={styles.header}>
      <div className={styles.headerLogo}>logo</div>
      <div className={styles.headerTitle}>
        {menu.map((item) => {
          return (
            <a
              href={window.location.origin + item.path}
              className={[styles.headerTitleLink, window.location.pathname.includes(item.path) ? styles.active : ''].join(' ')}
              key={item.name}>
              {item.name}
            </a>
          );
        })}
      </div>
    </header>
  );
};

export default Header;
