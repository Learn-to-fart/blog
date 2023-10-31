import React, { Suspense } from 'react';
import routes from '@/router';
import { useRoutes } from 'react-router-dom';
import LoadingState from '@components/LoadingState';
import { ConfigProvider } from 'antd';
import '@assets/scss/index.scss';

const App: React.FC = () => {
  const element = useRoutes(routes);
  return (
    <ConfigProvider theme={{ token: { colorPrimary: '#FF8800' } }}>
      <Suspense fallback={<LoadingState />}>{element}</Suspense>
    </ConfigProvider>
  );
};

export default App;
