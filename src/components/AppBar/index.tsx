import { Avatar } from 'antd';
import { useState } from 'react';
import { UserOutlined } from '@ant-design/icons';

const AppBar = () => {
  const [username] = useState('Given Somdaka');
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h3 style={{ marginBottom: '0', width: '50%' }}>Binay Admin Console</h3>
      <div className='account'>
        {username} <Avatar style={{ backgroundColor: '#be1e2d' }} icon={<UserOutlined />} />
      </div>
    </div>
  );
};

export default AppBar;
