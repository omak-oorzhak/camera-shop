import {ReactElement} from 'react';
import {Card} from '../card/card.tsx';

export function CatalogCards(): ReactElement {
  return (
    <div className="cards catalog__cards">
      <Card/>
    </div>
  );
}
