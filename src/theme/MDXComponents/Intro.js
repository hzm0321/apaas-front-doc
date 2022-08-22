import React, { useMemo } from 'react';
import { Tag } from 'antd';

export default function MDXIntro({ type }) {

  const tagProps = useMemo(() => {
    const colorMap = {
      must: {
        bg: '#f53f3f', text: '必须'
      }, forbidden: {
        bg: '#f53f3f', text: '禁止'
      }, should: {
        bg: '#ffb400', text: '应当'
      }, shouldNot: {
        bg: '#ffb400', text: '不应'
      }, optional: {
        bg: '#0fc6c2', text: '可选'
      }, draft: {
        bg: '#86909c', text: '提案'
      },
    }

    return colorMap[type];
  }, [type]);
  return <Tag style={{border: 'none', fontSize: '14px'}} color={tagProps.bg}>{tagProps.text}</Tag>;
}
