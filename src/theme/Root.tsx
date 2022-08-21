import React from "react";
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
    {children}
    {isShowDocFeedback() && <Feedback />}
  </>);
}
