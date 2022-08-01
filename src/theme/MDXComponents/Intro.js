import React, { useMemo } from 'react';
import { Tag } from '@chakra-ui/react'

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
  return <Tag
    borderRadius="4px"
    variant='solid'
    paddingX="8px"
    verticalAlign="middle"
    fontSize="14px"
    backgroundColor={tagProps.bg}
    color="white"
  >
    {tagProps.text}
  </Tag>;
}
