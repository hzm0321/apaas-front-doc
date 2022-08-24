import React from 'react';
import {MailOutlined} from "@ant-design/icons";
import {Button, Tooltip} from "antd";

import styles from './index.module.less';

interface Props {
}

const feedbackUrl = 'https://www.wenjuan.com/s/UZBZJvrf3K/#'

const Feedback: React.FC<Props> = () => {

  const toFeedback = () => {
    window.open(feedbackUrl);
  }

  return (
    <div className={styles.wrapper}>
      <Tooltip title="规范反馈" getPopupContainer={ (triggerNode) => triggerNode?.parentNode }>
        <Button
          className={styles.feedback}
          type="primary"
          shape="circle"
          size="large"
          icon={<MailOutlined />}
          onClick={toFeedback}
        />
      </Tooltip>
    </div>

  );
};

export default Feedback;
