import React from 'react';
import introJs  from "intro.js";
import { Button } from 'antd';

import Intro from '../../components/Intro';
// Add react-live imports you need here
const ReactLiveScope = {
  React,
  ...React,
  Button,
  Intro,
  introJs
};
export default ReactLiveScope;
