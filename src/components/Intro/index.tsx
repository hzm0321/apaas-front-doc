import React, { forwardRef, useCallback, useEffect, useRef, useImperativeHandle } from 'react';
import introJs from 'intro.js';
import { isEmpty, isNumber, isUndefined } from 'lodash';
import 'intro.js/introjs.css';

import './intro.css';

export interface IntroRefType extends introJs.IntroJs {}

interface Props {
  steps: introJs.Step[]; // 步骤
  onExit: Parameters<introJs.IntroJs['onexit']>[0];
  options?: introJs.Options; // 配置
  initialStep?: number; // 初始化时的所在步骤
  onBeforeExit?: Parameters<introJs.IntroJs['onbeforeexit']>[0];
  onBeforeChange?: Parameters<introJs.IntroJs['onbeforechange']>[0];
  onAfterChange?: Parameters<introJs.IntroJs['onafterchange']>[0];
  onChange?: Parameters<introJs.IntroJs['onchange']>[0];
  onComplete?: Parameters<introJs.IntroJs['oncomplete']>[0];
}

/**
 * 用户指引组件
 * @constructor
 */
const Intro = forwardRef<IntroRefType, Props>(( {
                                                  steps,
                                                  options = {},
                                                  initialStep,
                                                  onExit,
                                                  onBeforeExit,
                                                  onBeforeChange,
                                                  onAfterChange,
                                                  onChange,
                                                  onComplete,
                                                },
                                                ref) => {
  const introJsRef = useRef<introJs.IntroJs>(introJs());

  useImperativeHandle(ref, () => introJsRef.current);

  useEffect(() => {
    // 写入配置
    configureIntroJs();
    // 开始渲染
    renderSteps();
  }, [steps, initialStep]);

  useEffect(() => {
    return () => {
      introJsRef.current.exit();
    };
  }, []);

  // 初始化配置
  const configureIntroJs = () => {
    const defaultOptions: introJs.Options = {
      nextLabel: '<span style="display: inline-block">下一步</span>',
      prevLabel: '<span style="display: inline-block">上一步</span>',
      doneLabel: '<span style="display: inline-block">完成</span>',
      buttonClass: 'c7n-pro-btn-wrapper c7n-pro-btn c7n-pro-btn-raised c7n-pro-btn-default',
    };

    introJsRef.current.setOptions({ ...defaultOptions, ...options, steps });
    onExit && introJsRef.current.onexit(onExit);
    if (!isUndefined(onBeforeExit)) {
      introJsRef.current.onbeforeexit(onBeforeExit);
    }
    onBeforeChange && introJsRef.current.onbeforechange(onBeforeChange);
    onAfterChange && introJsRef.current.onafterchange(onAfterChange);
    onChange && introJsRef.current.onchange(onChange);
    onComplete && introJsRef.current.oncomplete(onComplete);
  };

  const renderSteps = useCallback(() => {
    if (!isEmpty(steps)) {
      introJsRef.current.start();
    }
    if (isNumber(initialStep)) {
      introJsRef.current.goToStepNumber(initialStep + 1);
    }
  }, [steps, initialStep]);

  return null;
});

export default Intro;
