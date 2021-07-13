import { Button } from 'antd';
import ActionBar from '../components/ActionBar';
import MainLayout from '../layouts/main';

const Dashboard = () => {
  return (
    <MainLayout>
      <ActionBar title='Dashboard' actions={[<Button>Click Me!</Button>]} />
    </MainLayout>
  );
};

export default Dashboard;
