import { Menu } from 'antd';
import { useHistory } from 'react-router-dom';

const MenuItem = Menu.Item;

const NavMenu = () => {
  const router = useHistory();

  const handleClick = ({ key }: any) => {
    router.push(`/${key}`);
  }
  return (
    <Menu style={{ minHeight: '100%' }} onClick={handleClick}>
      <MenuItem key="dashboard">Dashboard</MenuItem>
      <MenuItem key="quotations">Quotations</MenuItem>
      <MenuItem key="invoices">Invoices</MenuItem>
      <MenuItem key="receipts">Receipt</MenuItem>
    </Menu>
  );
};

export default NavMenu;
