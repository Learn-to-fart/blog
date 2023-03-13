import React from 'react';
import styles from './index.module.scss';

/**
 * react项目，初次虚拟dom挂载到dom中，展示loading
 * @constructor
 */
const LoadingState: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>加载中...</div>
    </div>
  );
};

export default LoadingState;
