import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Progress } from '@chakra-ui/react';

import { Header } from 'components/Header/Header';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Progress size="sm" isIndeterminate />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
