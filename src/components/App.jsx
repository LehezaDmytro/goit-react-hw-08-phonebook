import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

const SharedLayout = lazy(() => import('./SharedLayout/SharedLayout'));
const RegisterPage = lazy(() => import('../pages/Register/RegisterPage'));
const PrevateRoute = lazy(() => import('./PrivateRoute/PrivateRoute'));
const PublicRoute = lazy(() => import('./PublicRoute/PublicRoute'));
const LoginPage = lazy(() => import('../pages/Login/LoginPage'));
const HomePage = lazy(() => import('../pages/Home/HomePage'));

const App = () => {
  return (
    <ChakraProvider>
      <Suspense>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route element={<PrevateRoute />}>
              <Route path="home" element={<HomePage />} />
            </Route>
            <Route element={<PublicRoute />}>
              <Route path="register" element={<RegisterPage />} />
              <Route path="login" element={<LoginPage />} />
            </Route>
            <Route path="*" element={<LoginPage />} />
          </Route>
        </Routes>
      </Suspense>
    </ChakraProvider>
  );
};

export default App;
