import {ReactElement} from 'react';
import {Helmet} from 'react-helmet-async';
import {Breadcrumbs} from '../../components/breadcrumbs/breadcrumbs.tsx';
import {CatalogFilter} from '../../components/catalog-filter/catalog-filter.tsx';
import {CatalogContent} from '../../components/catalog-content/catalog-content.tsx';
import {Banner} from '../../components/banner/banner.tsx';

export function Catalog(): ReactElement {
  return (
    <main>
      <Helmet>
        <title>Каталог | Главная страница</title>
      </Helmet>
      <div className="page-content">
        <Banner/>
        <Breadcrumbs/>
        <section className="catalog">
          <div className="container">
            <h1 className="title title--h2">Каталог фото- и видеотехники</h1>
            <div className="page-content__columns">
              <div className="catalog__aside">
                <CatalogFilter/>
              </div>
              <CatalogContent/>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
