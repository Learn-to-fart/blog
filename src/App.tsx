import React, { Suspense } from 'react';
import routes from '@/router';
import { useRoutes } from 'react-router-dom';
import LoadingState from '@components/LoadingState';
import '@assets/scss/index.scss';

const App: React.FC = () => {
  const element = useRoutes(routes);

  return <Suspense fallback={<LoadingState />}>{element}</Suspense>;
};

export default App;
