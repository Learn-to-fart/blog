import React from 'react';
import type { RouteObject } from 'react-router-dom';

const BaseLayout = React.lazy(() => import(/* webpackChunkName: "BaseLayout" */ '@/layout/BaseLayout'));
const Home = React.lazy(() => import(/* webpackChunkName: "Home" */ '@pages/Home'));
const About = React.lazy(() => import(/* webpackChunkName: "About" */ '@pages/About'));
const Article = React.lazy(() => import(/* webpackChunkName: "About" */ '@pages/Article'));
const SignIn = React.lazy(() => import(/* webpackChunkName: "About" */ '@pages/SignIn'));
const SignUp = React.lazy(() => import(/* webpackChunkName: "About" */ '@pages/SignUp'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        index: true,
        path: '',
        element: <Home />
      },
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/article',
        element: <Article />
      }
    ]
  },
  {
    path: '/signIn',
    element: <SignIn />,
    children: []
  },
  {
    path: '/signUp',
    element: <SignUp />,
    children: []
  },
  {
    path: '/404',
    element: <div>404</div>
  }
];

export default routes;
