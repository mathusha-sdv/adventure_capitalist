import React from 'react';
import Page from '..';
import Products from './products';
import Solde from '../../components/solde';
import Managers from '../../components/mes_managers';
import UnlockProduct from '../../components/debloquer_produit';

const Home = () => (
  <Page>
    <Solde />
    <Products />
    <UnlockProduct />
    <Managers />
  </Page>
);

export default Home;
