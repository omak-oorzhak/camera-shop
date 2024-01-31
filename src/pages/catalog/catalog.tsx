import {ReactElement} from 'react';
import {Helmet} from 'react-helmet-async';
import {Breadcrumbs} from '../../components/breadcrumbs/breadcrumbs.tsx';

export function Catalog(): ReactElement {
  return (
    <main>
      <Helmet>
        <title>Каталог | Главная страница</title>
      </Helmet>
      <Breadcrumbs/>
      <section className="catalog">
        <div className="container">
          <h1 className="title title--h2">Каталог фото- и видеотехники</h1>
        </div>
      </section>
    </main>
  );
}
