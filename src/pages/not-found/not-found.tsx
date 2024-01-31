import {Link} from 'react-router-dom';
import {AppRoute} from '../../consts.ts';
import {ReactElement} from 'react';

export function NotFound(): ReactElement {
  return (
    <main>
      <div className="container">
        <h1>Страница не найдена</h1>
        <Link to={AppRoute.Catalog} className="btn">
          Перейти на главную
        </Link>
      </div>
    </main>
  );
}
