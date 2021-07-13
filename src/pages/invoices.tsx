import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import ActionBar from '../components/ActionBar';
import MainLayout from '../layouts/main';

const Invoices = () => {
  return (
    <MainLayout>
      <ActionBar title='Invoices' actions={[<Button type="primary"><PlusOutlined /> Create</Button>]} />
    </MainLayout>
  );
};

export default Invoices;
