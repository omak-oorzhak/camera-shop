import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import {Layout} from './layout/layout.tsx';
import {AppRoute} from './consts.ts';
import {Catalog} from './pages/catalog/catalog.tsx';
import {Product} from './pages/product/product.tsx';
import {NotFound} from './pages/not-found/not-found.tsx';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

export const browserRouter = createBrowserRouter([
  {
    element: <Layout/>,
    children: [
      {
        path: AppRoute.Catalog,
        element: <Catalog/>
      },
      {
        path: `${AppRoute.Product}/:productId`,
        element: <Product/>
      },
      {
        path: AppRoute.NotFound,
        element: <NotFound/>
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={browserRouter}/>
    </HelmetProvider>
  </React.StrictMode>
);
