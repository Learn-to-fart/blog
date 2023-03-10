import React from 'react';
import type { RouteObject } from 'react-router-dom';

const BaseLayout = React.lazy(() => import(/* webpackChunkName: "BaseLayout" */ '../layout/BaseLayout'));
const Home = React.lazy(() => import(/* webpackChunkName: "Home" */ '../pages/Home'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <Home />
      }
    ]
  },
  {
    path: '/404',
    element: <div>404</div>
  }
];

export default routes;
