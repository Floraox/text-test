import React from 'react';
import styles from './abnormal.css';
import {Button, Row, Card, Col, Form, Input} from "antd";
import {MinusCircleOutline, PlusOutline} from "@ant-design/icons";

export default function () {
  const onFinish = (values: any) => {
    console.log('Received values of form:', values);
  };
  return (
    <div>
      <h1 className={styles.title}>短信异常事件标注</h1>

      <p className={styles.description}>
        针对罪犯接收到的短信，标注异常事件，事件分为两块：实体+异常事件；<br/>
        异常事件的定义是：能够较大程度影响罪犯服刑改造积极性的事件。<br/>
        如“今天儿子上学考了90多分“，无异常<br/>
        如“今天儿子感冒了，去医院打点滴了”，实体：儿子，事件：感冒<br/>
        如“我现在也没钱，没办法打钱给你”，实体：我，事件：没钱<br/>
        如“爸爸昨天走的，等搭理好了我来看你”，实体：爸爸，事件：走
      </p>

      <Card title="标注数据" bordered={false} className={styles.sampleCard}>
        测试文本测试文本测试文本测试文本测试文本
      </Card>
      <div>
        {/*动态增加表单会报错*/}
        {/*<Form name="dynamic_form" onFinish={onFinish} autoComplete="off">*/}
        {/*  <Form.List name="users">*/}
        {/*    {(fields: { [x: string]: any; key: any; name: any; fieldKey: any; }[], {add, remove}: any) => (*/}
        {/*      <>*/}
        {/*        {fields.map(({ key, name, fieldKey, ...restField }) => (*/}
        {/*          <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">*/}
        {/*            <Form.Item*/}
        {/*              {...restField}*/}
        {/*              name={[name, 'first']}*/}
        {/*              fieldKey={[fieldKey, 'first']}*/}
        {/*              rules={[{ required: true, message: 'Missing first name' }]}*/}
        {/*            >*/}
        {/*              <Input placeholder="First Name" />*/}
        {/*            </Form.Item>*/}
        {/*            <Form.Item*/}
        {/*              {...restField}*/}
        {/*              name={[name, 'last']}*/}
        {/*              fieldKey={[fieldKey, 'last']}*/}
        {/*              rules={[{ required: true, message: 'Missing last name' }]}*/}
        {/*            >*/}
        {/*              <Input placeholder="Last Name" />*/}
        {/*            </Form.Item>*/}
        {/*            <MinusCircleOutline onClick={() => remove(name)} />*/}
        {/*          </Space>*/}
        {/*        ))}*/}
        {/*        <Form.Item>*/}
        {/*          <Button type="dashed" onClick={() => add()} block icon={<PlusOutline />}>*/}
        {/*            Add field*/}
        {/*          </Button>*/}
        {/*        </Form.Item>*/}
        {/*      </>*/}
        {/*    )}*/}
        {/*  </Form.List>*/}
        {/*  <Form.Item>*/}
        {/*    <Button type="primary" htmlType="submit">*/}
        {/*      Submit*/}
        {/*    </Button>*/}
        {/*  </Form.Item>*/}
        {/*</Form>*/}
      </div>

    </div>
  );
}
