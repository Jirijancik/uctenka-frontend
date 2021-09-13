import React, { useEffect, useState } from 'react';
import {
  Form,
  Input,
  Button,
  Select,
  DatePicker,
  InputNumber,
} from 'antd';
import TextArea from 'antd/lib/input/TextArea';

 export const CreateInvoice = () => {

  const [data, setData] = useState(" NO DATA ");

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  const handleOnFinish = (item:any ) => console.log(item)

  return (
    <>
      <h1>
        {data}
      </h1>
      <Form
        onFinish={handleOnFinish}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
      >

        <Form.Item label="Dodavatel" name="supplier">
          <Input />
        </Form.Item>

        <Form.Item label="Datum prijeti" name="acceptanceDate">
          <DatePicker />
        </Form.Item>

        <Form.Item label="Datum zdanitelneho plneni DUZP" name="duzp">
          <DatePicker />
        </Form.Item>

        <Form.Item label="Datum splatnosti" name="dueDate">
          <DatePicker />
        </Form.Item>

        <Form.Item label="Popis" name="description">
          <TextArea />
        </Form.Item>

        <Form.Item label="Mnozstvi" name="quantity">
          <InputNumber />
        </Form.Item>

        <Form.Item label="Cena bez DPH" name="priceWithoutTax">
          <InputNumber />
        </Form.Item>

        <Form.Item label="DPH" name="tax">
          <Select>
            <Select.Option value="0">0%</Select.Option>
            <Select.Option value="15">15%</Select.Option>
            <Select.Option value="21">21%</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Kod DPH" name="taxCode">
          <Select>
            <Select.Option value="one">Prijeti sluzby z tuzemska - zakladni</Select.Option>
            <Select.Option value="two">Prijeti sluzby ze zahranici - zakladni</Select.Option>
            <Select.Option value="three">Prijeti sluzby z tuzemska - snizena</Select.Option>
            <Select.Option value="four">Prijeti sluzby ze zahranici - snizena</Select.Option>
            <Select.Option value="five">Prijeti zbozi z tuzemska - zakladni</Select.Option>
            <Select.Option value="six">Prijeti zbozi ze zahranici - zakladni</Select.Option>
            <Select.Option value="seven">Prijeti zbozi z tuzemska - snizena</Select.Option>
            <Select.Option value="eight">Prijeti zbozi ze zahranici - snizena</Select.Option>
            <Select.Option value="nine">Nezahrnovat</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Operace" name="operation">
          <InputNumber />
        </Form.Item>

        <Form.Item label="Cena celkem" name="totalPrice">
          <InputNumber />
        </Form.Item>

        <Form.Item name="Button">
          <Button type="primary" htmlType="submit">Odeslat</Button>
        </Form.Item>
      </Form>
    </>
  );
};
