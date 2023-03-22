import React from 'react';
import styles from './index.module.scss';
import ReactMarkdown from 'react-markdown';
import document from '@document/main.md';

const Home: React.FC = () => {
  return (
    <div className={styles.content}>
      <ReactMarkdown>{document}</ReactMarkdown>
    </div>
  );
};

export default Home;
