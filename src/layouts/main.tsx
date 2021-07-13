import { Layout } from 'antd';
import AppBar from '../components/AppBar';
import NavMenu from '../components/NavMenu';

const { Header, Sider, Content } = Layout;

const MainLayout = ({ children }: any) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ background: '#fff', borderBottom: '1px solid #ccc', padding: '0 1rem' }}>
        <AppBar />
      </Header>
      <Layout>
        <Sider style={{ background: 'unset', borderRight: '1px solid #ccc' }}>
          <NavMenu />
        </Sider>
        <Content>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
