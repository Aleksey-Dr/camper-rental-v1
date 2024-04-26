import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import Container from 'components/Container'
import Layout from './Layout';
const Home = lazy(() => import('pages/Home/'));
const Catalog = lazy(() => import('pages/Catalog/'));

export const App = () => {
  return (
    <Container>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/catalog' element={<Catalog />} />
        </Route>
      </Routes>
    </Container>
  );
};
