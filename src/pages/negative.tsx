import React from 'react';
import styles from './negative.css';
import {Button, Row, Card, Col, Form, Select, Input} from "antd";
import autoMockOff = jest.autoMockOff;



export default function () {
  const { Option } = Select;
  const itemLayout = {
    labelCol:{span:6},
    wrapperCol:{span:16},
  };
  // const causeOption = [{value:'刑期相关'},{value:'法院相关'},{value:'不服判决'},{value:'夫妻孩子'},
  //   {value:'亲人'},{value:'财产相关'},{value:'个人疾病'}];
  const cause = ['刑期相关','法院相关','不服判决','夫妻孩子','亲人','财产相关','个人疾病'];
  const causeOption = [];
  for (let i = 0; i < cause.length; i++) {
    causeOption.push(<Option key={cause[i]}>{cause[i]}</Option>);
  }
  const outcome = ['自杀自伤', '精神障碍','不适应', '不合规定','不服管理','打斗','口角','恶性事件', '包裹异常'];
  const outcomeOption = [];
  for (let i = 0; i < outcome.length; i++) {
    outcomeOption.push(<Option key = {outcome[i]}>{outcome[i]}</Option>);
  }
  const disposal = ['整训', '处罚','束缚','扣分']
  const disposalOption = [];
  for (let i = 0; i < disposal.length; i++) {
    disposalOption.push(<Option key = {disposal[i]}>{disposal[i]}</Option>);
  }

  function handleCause(value) {
    console.log(`cause ${value}`);
  }
  function handleOutcome(value) {
    console.log(`outcome ${value}`);
  }
  function handleDisposal(value) {
    console.log(`disposal ${value}`);
  }

  return (
    <div>
      <h1 className={styles.title}>狱内异常事件识别标注</h1>
      <p className={styles.description}>狱内异常事件需要区分出起因-结果-处置，及其他异常；<br/>
        如“犯人得知离婚后，在劳动时与其他犯人争吵并顶撞民警，扣10分整训”<br/>
        起因：离婚<br/>
        结果：吵架 - 不服从管教<br/>
        处置：扣10分 - 整训<br/>
        其他异常：无
      </p>
      <Card title="标注数据" bordered={false} className={styles.sampleCard}>
        测试文本测试文本测试文本测试文本测试文本
      </Card>
      <div>
        <Form {...itemLayout} className={styles.formbody}>
          <Row>
            <Col span={6}>
              <Form.Item
                name="select-cause"
                label="起因">
                <Select mode="multiple" placeholder="请选择" allowClear onChange={handleCause}>
                  {causeOption}
                </Select>
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item

                name="select-outcome"
                label="结果">
                <Select mode="multiple" placeholder="请选择" allowClear onChange={handleOutcome}>
                  {outcomeOption}
                </Select>
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item

                name="select-disposal"
                label="处罚">
                <Select mode="multiple" placeholder="请选择" allowClear onChange={handleDisposal}>
                  {disposalOption}
                </Select>
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item

                name="other"
                label="其他">
                <Input />
              </Form.Item>
            </Col>
          </Row>
        </Form>

      </div>
    </div>
  );
}
