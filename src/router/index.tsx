import React from 'react';
import type { RouteObject } from 'react-router-dom';

const BaseLayout = React.lazy(() => import(/* webpackChunkName: "BaseLayout" */ '@/layout/BaseLayout'));
const Home = React.lazy(() => import(/* webpackChunkName: "Home" */ '@pages/Home'));
const About = React.lazy(() => import(/* webpackChunkName: "About" */ '@pages/About'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      }
    ]
  },
  {
    path: '/404',
    element: <div>404</div>
  }
];

export default routes;
