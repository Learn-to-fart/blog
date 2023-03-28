import React from 'react';
import styles from '@/layout/layout.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <a href="https://beian.miit.gov.cn/">滇ICP备2022007312号</a>
    </footer>
  );
};

export default Footer;
