import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@/layout/Header';
import Footer from '@/layout/Footer';
import styles from '@/layout/layout.module.scss';
import { Card as NCard } from 'ui-neumorphism';

const Card: any = NCard;

const BaseLayout: React.FC = () => {
  // @ts-ignore
  return (
    <main className={styles.main}>
      <Header />
      <Card inset>
        <Outlet />
      </Card>
      <Footer />
    </main>
  );
};

export default BaseLayout;
