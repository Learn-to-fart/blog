import React, { Suspense } from 'react';
import routes from './router';
import { useRoutes } from 'react-router-dom';

const App: React.FC = () => {
  const element = useRoutes(routes);

  return (
    <div>
      <Suspense fallback={<div>loading...</div>}>{element}</Suspense>
    </div>
  );
};

export default App;
