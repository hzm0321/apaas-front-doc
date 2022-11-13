import React from "react";
import { ConfigProvider } from 'antd';
import {useLocation} from "@docusaurus/router";

import Feedback from '../components/Feedback';
import '../css/theme.less';

// Default implementation, that you can customize
export default function Root({children}) {
  const location = useLocation();
  const isShowDocFeedback = () => {
    return location.pathname.includes('apaas-front-doc/docs')
  }

  return (<>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#012492',
        },
      }}
    >
      {children}
      {isShowDocFeedback() && <Feedback />}
    </ConfigProvider>
  </>);
}
