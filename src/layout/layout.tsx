import {Outlet} from 'react-router-dom';
import {Header} from '../components/header/header.tsx';
import {Footer} from '../components/footer/footer.tsx';
import {ReactElement} from 'react';

export function Layout(): ReactElement {
  return (
    <div className="wrapper">
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  );
}
