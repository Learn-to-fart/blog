import React from 'react';
import styles from './index.module.scss';
// import ReactMarkdown from 'react-markdown';
import document from '@document/aaaa.md';
import Markdown from '@components/Markdown';

// @ts-ignore
import { Card, ListItem, ListItemGroup } from 'ui-neumorphism';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentLeft}>
        <Card className={styles.contentLeftList}>
          <ListItemGroup>
            <ListItem title={'一'} />
          </ListItemGroup>
        </Card>
      </div>
      <Card className={styles.contentMain}>
        <Markdown textContent={document} darkMode language={''} />
      </Card>
    </div>
  );
};

export default Home;
