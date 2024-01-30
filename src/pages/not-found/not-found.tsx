import {Link} from 'react-router-dom';
import {AppRoute} from '../../consts.ts';
import {ReactElement} from 'react';

export function NotFound(): ReactElement {
  return (
    <main>
      <h1>Страница не найдена</h1>
      <Link to={AppRoute.Catalog} className="btn">
        Перейти на главную
      </Link>
    </main>
  );
}
