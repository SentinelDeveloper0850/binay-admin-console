import { PageHeader } from 'antd';
import Break from '../Break';

const ActionBar = ({ title, subtitle = null, children = null, actions = [] }: any) => {
  return (
    <PageHeader title={title} subTitle={subtitle} extra={actions}>
      {children}
      <Break />
    </PageHeader>
  );
};

export default ActionBar;
