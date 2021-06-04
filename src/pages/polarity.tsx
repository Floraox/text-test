import React from 'react';
import styles from './polarity.css';
import {Button, Row, Card, Col, Form} from "antd";


export default function () {
  return (
    <div>
      <h1 className={styles.title}>短信情感标注</h1>

      <p className={styles.description}>
        针对罪犯发出的短信数据，区分出强正性、强负性、中性情感；<br/>
        强正性：指“能够明显、清晰感受罪犯改过自新的态度”，如对未来有展望等；<br/>
        强负性：指“能够明显、清晰感受罪犯不想改过自新的态度”，如不停抱怨等；<br/>
        中性：非上述两类；<br/>
        示例：<br/>
        如“爸爸妈妈过年好，注意身体，我会好好的” – 中性情感<br/>
        如“老婆辛苦你了，我会好好改造，出来跟你一起开店，养孩子” – 强正性<br/>
        如“老婆，你帮我去找找关系减刑” – 强负性<br/>
      </p>

      <Card title="标注数据" bordered={false} className={styles.sampleCard}>
        测试文本测试文本测试文本测试文本测试文本
      </Card>
      <div className={styles.flexButton}>
        <Button className={styles.btn}>
          强正性
        </Button>
        <Button className={styles.btn}>
          中性
        </Button>
        <Button className={styles.btn}>
          强负性
        </Button>

      </div>

    </div>
  );
}
