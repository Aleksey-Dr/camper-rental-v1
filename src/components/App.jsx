import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import Container from 'components/Container'
import Layout from './Layout';
import NotFound from 'pages/NotFound';
import Features from 'components/Features';
import Reviews from 'components/Reviews';


const Home = lazy(() => import('pages/Home/'));
const Catalog = lazy(() => import('pages/Catalog/'));
const ModalWindow = lazy(() => import('components/ModalWindow/'));

export const App = () => {
  return (
    <Container>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='catalog' element={<Catalog />}>
            <Route path=':camperId' element={<ModalWindow />}>
              <Route path='features' element={<Features />} />
              <Route path='reviews' element={<Reviews />} />
            </Route>
          </Route>
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </Container>
  );
};
