import {ReactElement} from 'react';
import {Link} from 'react-router-dom';

export function Breadcrumbs(): ReactElement {
  return (
    <div className="breadcrumbs">
      <div className="container">
        <ul className="breadcrumbs__list">
          <li className="breadcrumbs__item">
            <Link className="breadcrumbs__link" to="/">
              Главная
              <svg width={5} height={8} aria-hidden="true">
                <use xlinkHref="#icon-arrow-mini"/>
              </svg>
            </Link>
          </li>
          <li className="breadcrumbs__item">
            <span className="breadcrumbs__link breadcrumbs__link--active">
              Каталог
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
