import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import ActionBar from '../components/ActionBar';
import MainLayout from '../layouts/main';

const Receipts = () => {
  return (
    <MainLayout>
      <ActionBar title='Receipts' actions={[<Button type="primary"><PlusOutlined /> Create</Button>]} />
    </MainLayout>
  );
};

export default Receipts;
