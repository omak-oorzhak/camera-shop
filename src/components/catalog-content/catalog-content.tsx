import {ReactElement} from 'react';
import {CatalogSort} from '../catalog-sort/catalog-sort.tsx';
import {CatalogCards} from '../catalog-cards/catalog-cards.tsx';
import {Pagination} from '../pagination/pagination.tsx';

export function CatalogContent(): ReactElement {
  return (
    <div className="catalog__content">
      <CatalogSort/>
      <CatalogCards/>
      <Pagination/>
    </div>
  );
}
