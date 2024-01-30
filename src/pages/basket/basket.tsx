import {ReactElement} from 'react';
import {Helmet} from 'react-helmet-async';

export function Catalog(): ReactElement {
  return (
    <main>
      <Helmet>
        <title>Корзина</title>
      </Helmet>
      <h1>Здесь будет корзина</h1>
    </main>
  );
}
