import { useLocation } from 'react-router-dom';
import { Layout } from 'antd';

import Sidenav from './Sidenav';
import Header from './Header';
import Footer from './Footer';
import { Branding__Sider } from 'components/brand';

const { Header: AntHeader, Content, Sider } = Layout;

function Main({ children }) {
  let { pathname } = useLocation();
  pathname = pathname.replace('/', '');

  return (
    <Layout
      className={`layout-dashboard ${
        pathname === 'profile' ? 'layout-profile' : ''
      }`}
    >
      <Sider
        className={`sider-primary ant-layout-sider-primary`}
        breakpoint='lg'
        collapsedWidth='0'
        trigger={null}
        width={250}
        theme='light'
      >
        <Branding__Sider />
        <Sidenav />
      </Sider>
      <Layout>
        <AntHeader>
          <Header name={pathname} subName={pathname} />
        </AntHeader>
        <Content className='content-ant'>{children}</Content>
        <Footer />
      </Layout>
    </Layout>
  );
}

export default Main;
