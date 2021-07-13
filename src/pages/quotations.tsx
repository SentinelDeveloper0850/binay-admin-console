import { DeleteTwoTone, PlusOutlined } from '@ant-design/icons';
import { Button, Col, Drawer, List, Row, Table } from 'antd';
import moment from 'moment';
import { useState } from 'react';
import ActionBar from '../components/ActionBar';
import Break from '../components/Break';
import QuoteItemForm, { IQuoteItem } from '../components/QuoteItemForm';
import { VAT_RATE } from '../constants';
import MainLayout from '../layouts/main';
import { formatToMoneyWithCurrency, formatUCTtoISO } from '../utils/formats';

export interface IQuotation {
  quotationNumber: string;
  name?: string;
  client: string;
  total: number;
  dateCreated: string;
  expiryDate: string;
}

const Quotations = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [quoteItems, setQuoteItems] = useState<IQuoteItem[]>([]);
  const [quotations, setQuotations] = useState<IQuotation[]>([]);
  const [newQuote] = useState<IQuotation>({
    quotationNumber: '',
    name: 'Bill\'s Website',
    client: 'Billy Bob\'s Warehouse',
    total: 0,
    dateCreated: moment().toISOString(),
    expiryDate: moment().add(7, 'days').toISOString(),
  });

  const columns = [
    {
      title: 'Quotation Number',
      dataIndex: 'quotationNumber',
    },
    {
      title: 'Description',
      dataIndex: 'name',
    },
    {
      title: 'Client',
      dataIndex: 'client',
    },
    {
      title: 'Total',
      dataIndex: 'total',
      render: (text: any) => <span>{formatToMoneyWithCurrency(text)}</span>
    },
    {
      title: 'Created At',
      dataIndex: 'dateCreated',
      render: (text: any) => <span>{formatUCTtoISO(text)}</span>
    },
    {
      title: 'Expires On',
      dataIndex: 'expiryDate',
      render: (text: any) => <span>{formatUCTtoISO(text)}</span>
    },
  ]

  const handleDrawerOpen = () => {
    setShowDrawer(true);
  };

  const handleDrawerClose = () => {
    setShowDrawer(false);
  };

  const handleItemSubmit = (newItem: any) => {
    setQuoteItems([...quoteItems, newItem]);
  };

  const handleItemDelete = (item: IQuoteItem) => {
    let updatedQuoteItems = quoteItems.filter(e => e !== item);
    setQuoteItems(updatedQuoteItems);
  }

  const calculateTotal = () => {
    let total = 0;
    quoteItems.forEach((item) => (total += item.total));
    return total;
  };

  const handleSubmitQuote = () => {
    let total = calculateTotal();
    let quote: IQuotation = {...newQuote, quotationNumber: `EST-001`, total: total};
    setQuotations([...quotations, quote]);
    setShowDrawer(false);
  }

  return (
    <MainLayout>
      <ActionBar
        title='Quotations'
        actions={[
          <Button type='primary' onClick={handleDrawerOpen}>
            <PlusOutlined /> Create
          </Button>,
        ]}
      />
      <Table columns={columns} dataSource={quotations} style={{ margin: '0 1.5rem' }} />
      <Drawer
        title='Create a new quotation'
        width={'50%'}
        onClose={handleDrawerClose}
        visible={showDrawer}
        bodyStyle={{ paddingBottom: 80 }}
        footer={
          <div
            style={{
              textAlign: 'right',
            }}>
            <Button onClick={handleDrawerClose} style={{ marginRight: 8 }}>
              Cancel
            </Button>
            <Button onClick={handleSubmitQuote} type='primary'>
              Submit
            </Button>
          </div>
        }>
        <QuoteItemForm handleSubmit={handleItemSubmit} />
        <Break />
        <List
          itemLayout='horizontal'
          dataSource={quoteItems}
          header={
            <List.Item>
              <List.Item.Meta
                title={
                  <Row gutter={16} justify='space-between'>
                    <Col span={9}>Item Name</Col>
                    <Col span={3}>Quantity</Col>
                    <Col span={3}>Price</Col>
                    <Col span={3}>VAT ({VAT_RATE}%)</Col>
                    <Col span={5} style={{ textAlign: 'end' }}>
                      Total
                    </Col>
                    <Col span={1}></Col>
                  </Row>
                }></List.Item.Meta>
            </List.Item>
          }
          footer={
            <List.Item>
              <List.Item.Meta
                title={
                  <Row gutter={16} justify='space-between'>
                    <Col span={18}>Total</Col>
                    <Col span={5} style={{ textAlign: 'end' }}>
                      {formatToMoneyWithCurrency(calculateTotal())}
                    </Col>
                    <Col span={1}></Col>
                  </Row>
                }></List.Item.Meta>
            </List.Item>
          }
          renderItem={(item, index) => (
            <List.Item>
              <List.Item.Meta
                description={
                  <Row gutter={16} justify='space-between'>
                    <Col span={9}>{item.name}</Col>
                    <Col span={3}>{item.quantity}</Col>
                    <Col span={3}>{formatToMoneyWithCurrency(item.price.toString())}</Col>
                    <Col span={3}>{formatToMoneyWithCurrency(item.tax.toString())}</Col>
                    <Col span={5} style={{ textAlign: 'end' }}>
                      {formatToMoneyWithCurrency(item.total.toString())}
                    </Col>
                    <Col span={1}>
                      <DeleteTwoTone twoToneColor='#be1e2d' style={{ cursor: 'pointer' }} onClick={() => handleItemDelete(item)} />
                    </Col>
                  </Row>
                }></List.Item.Meta>
            </List.Item>
          )}
        />
      </Drawer>
    </MainLayout>
  );
};

export default Quotations;
