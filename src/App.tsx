import React, { Suspense } from 'react';
import routes from '@/router';
import { useRoutes } from 'react-router-dom';
import LoadingState from '@components/LoadingState';
import '@assets/scss/index.scss';
import { overrideThemeVariables } from 'ui-neumorphism';
import 'ui-neumorphism/dist/index.css';

const App: React.FC = () => {
  const element = useRoutes(routes);
  overrideThemeVariables({
    '--light-bg': '#E9B7B9',
    '--light-bg-dark-shadow': '#ba9294',
    '--light-bg-light-shadow': '#ffdcde',
    '--dark-bg': '#292E35',
    '--dark-bg-dark-shadow': '#21252a',
    '--dark-bg-light-shadow': '#313740',
    '--primary': '#8672FB',
    '--primary-dark': '#4526f9',
    '--primary-light': '#c7befd'
  });

  return <Suspense fallback={<LoadingState />}>{element}</Suspense>;
};

export default App;
