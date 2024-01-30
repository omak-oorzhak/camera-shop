import {ReactElement} from 'react';
import {Helmet} from 'react-helmet-async';

export function Catalog(): ReactElement {
  return (
    <main>
      <Helmet>
        <title>Каталог | Главная страница</title>
      </Helmet>
      <h1>Здесь будет каталог (главная страница)</h1>
    </main>
  );
}
