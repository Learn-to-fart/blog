import React from 'react';
import styles from './index.module.scss';
import ReactMarkdown from 'react-markdown';
import document from '@document/aaaa.md';
// @ts-ignore
import { Card, ListItem, ListItemGroup } from 'ui-neumorphism';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Card className={styles.contentLeft}>
        <ListItemGroup>
          <ListItem title={'一'} />
        </ListItemGroup>
      </Card>
      <Card className={styles.contentMain}>
        <ReactMarkdown>{document}</ReactMarkdown>
      </Card>
    </div>
  );
};

export default Home;
