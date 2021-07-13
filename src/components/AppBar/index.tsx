import { Avatar, Dropdown, Menu } from 'antd';
import { useState } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import { Auth } from 'aws-amplify';

const AppBar = () => {
  const [username] = useState('Given Somdaka');

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h3 style={{ marginBottom: '0', width: '50%' }}>Binay Admin Console</h3>
      <div className='account'>
        <UserAccount username={username} />
      </div>
    </div>
  );
};

const UserAccount = ({ username = '' }) => {
  const router = useHistory();
  
  async function signOut() {
    try {
      await Auth.signOut().then(() => router.replace('/'));
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }

  const handleMenuClick = ({ key }: any) => {
    switch (key) {
      case 'signOut':
        signOut();
        break;

      default:
        break;
    }
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item disabled>Profile</Menu.Item>
      <Menu.Item key='signOut' danger>
        Sign Out
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu}>
      <span className='ant-dropdown-link' onClick={(e) => e.preventDefault()}>
        {username} <Avatar style={{ backgroundColor: '#be1e2d' }} icon={<UserOutlined />} />
      </span>
    </Dropdown>
  );
};

export default AppBar;
