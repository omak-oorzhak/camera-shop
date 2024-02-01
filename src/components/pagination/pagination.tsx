import {ReactElement} from 'react';

export function Pagination(): ReactElement {
  return (
    <div className="pagination">
      <ul className="pagination__list">
        <li className="pagination__item">
          <a className="pagination__link pagination__link--active" href="#">
            1
          </a>
        </li>
        <li className="pagination__item">
          <a className="pagination__link" href="#">
            2
          </a>
        </li>
        <li className="pagination__item">
          <a className="pagination__link" href="#">
            3
          </a>
        </li>
        <li className="pagination__item">
          <a className="pagination__link pagination__link--text" href="#">
            Далее
          </a>
        </li>
      </ul>
    </div>
  );
}
