import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@/layout/Header';
import Footer from '@/layout/Footer';
import styles from '@/layout/layout.module.scss';

const BaseLayout: React.FC = () => {
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.content}>
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};

export default BaseLayout;
