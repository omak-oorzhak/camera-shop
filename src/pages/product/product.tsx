import {ReactElement} from 'react';
import {Helmet} from 'react-helmet-async';

export function Product(): ReactElement {
  return (
    <main>
      <Helmet>
        <title>Карточка товара</title>
      </Helmet>
      <h1>Здесь будет карточка товара</h1>
    </main>
  );
}
