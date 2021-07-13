import { Form, Row, Col, Input, InputNumber, Button, Switch } from 'antd';
import { useState } from 'react';
import { VAT_RATE } from '../../constants';

export interface IQuoteItem {
  name: string;
  quantity: number;
  price: number;
  total: number;
  tax: number;
}

const QuoteItemForm = ({ handleSubmit }: any) => {
  const [quoteItem, setQuoteItem] = useState({
    name: '',
    quantity: 1,
    price: 0,
    total: 0,
    tax: 0,
  });

  const handleAddClick = () => {
    handleSubmit(quoteItem);
  };

  const handleQuantityChange = (value: string) => {
    const newQuantity = Number(value);
    const newTotal = quoteItem.price * newQuantity;
    setQuoteItem({ ...quoteItem, quantity: newQuantity, total: newTotal });
  };

  const handlePriceChange = (value: string) => {
    const newPrice = Number(value);
    const newTotal = quoteItem.quantity * newPrice;
    setQuoteItem({ ...quoteItem, price: newPrice, total: newTotal });
  };

  return (
    <Form layout='vertical' hideRequiredMark>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item name='name' label='Item Name' rules={[{ required: true, message: 'Required' }]}>
            <Input
              placeholder='Item Name'
              value={quoteItem.name}
              onChange={({ target }) => setQuoteItem({ ...quoteItem, name: target.value })}
            />
          </Form.Item>
        </Col>
        <Col span={3}>
          <Form.Item name='quantity' label='Quantity' rules={[{ required: true, message: 'Required' }]}>
            <InputNumber
              style={{ width: '100%' }}
              defaultValue={'1'}
              onChange={handleQuantityChange}
              value={quoteItem.quantity.toString()}
            />
          </Form.Item>
        </Col>
        <Col span={3}>
          <Form.Item name='price' label='Price' rules={[{ required: true, message: 'Required' }]}>
            <InputNumber
              step={100}
              defaultValue={'0'}
              value={quoteItem.price.toString()}
              onChange={handlePriceChange}
              style={{ width: '100%' }}
            />
          </Form.Item>
        </Col>
        <Col span={3}>
          <Form.Item name='vat' label='VAT' rules={[{ required: true, message: 'Required' }]}>
            <Switch checkedChildren={`Taxed (${VAT_RATE}%)`} unCheckedChildren='Not Taxed' defaultChecked />
          </Form.Item>
        </Col>
        {/* <Col span={3}>
          <Form.Item name='total' label='Total' rules={[{ required: true, message: 'Required' }]}>
            <InputNumber
              defaultValue={'0'}
              value={quoteItem.total.toString()}
              style={{ width: '100%' }}
              formatter={(value) => `R ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              // @ts-ignore
              parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
            />
          </Form.Item>
        </Col> */}
        <Col span={3}>
          <Form.Item label=' '>
            <Button type='primary' onClick={handleAddClick}>
              Add Item
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default QuoteItemForm;
