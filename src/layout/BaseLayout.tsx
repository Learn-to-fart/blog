import React from 'react';
import { Outlet } from 'react-router-dom';

const BaseLayout: React.FC = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default BaseLayout;
