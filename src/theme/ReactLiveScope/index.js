import React from 'react';
import introJs  from "intro.js";

import Intro from '../../components/Intro';
// Add react-live imports you need here
const ReactLiveScope = {
  React,
  ...React,
  Intro,
  introJs
};
export default ReactLiveScope;
