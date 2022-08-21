import React from 'react';
import {MailOutlined} from "@ant-design/icons";
import {Button, Tooltip} from "antd";


interface Props {
}

const feedbackUrl = 'https://www.wenjuan.com/s/UZBZJvrf3K/#'

const Feedback: React.FC<Props> = () => {

  const toFeedback = () => {
    window.open(feedbackUrl);
  }

  return (
    <Tooltip title="规范反馈">
      <Button
        style={{
          position: 'fixed',
          zIndex: 9999,
          right: '25px',
          bottom: '80px',
        }}
        type="primary"
        shape="circle"
        size="large"
        icon={<MailOutlined />}
        onClick={toFeedback}
      />
    </Tooltip>
  );
};

export default Feedback;
