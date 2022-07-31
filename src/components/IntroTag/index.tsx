import React, {useMemo} from 'react';
import {Tag} from '@chakra-ui/react'

import MDXComponents from '@theme-original/MDXComponents';

interface Props {
  type: TagType | keyof typeof TagType;
}

export enum TagType {
  must = 'must',
  forbidden = 'forbidden',
  should = 'should',
  shouldNot = 'shouldNot',
  optional = 'optional',
  draft = 'draft',
}

const IntroTag: React.FC<Props> = ({type}) => {

  const tagProps = useMemo(() => {
    const colorMap = {
      must: {
        bg: '#00b42a',
        text: '必须'
      },
      forbidden: {
        bg: '#f53f3f',
        text: '禁止'
      },
      should: {
        bg: '#165dff',
        text: '应当'
      },
      shouldNot: {
        bg: '#ffb400',
        text: '不应'
      },
      optional: {
        bg: '#0fc6c2',
        text: '可选'
      },
      draft: {
        bg: '#86909c',
        text: '提案'
      },
    }

    const props = {
      ...colorMap[type],
    }

    return props;
  },[type]);

  return (
    <Tag
      borderRadius="4px"
      variant='solid'
      paddingX="8px"
      verticalAlign="middle"
      fontSize="14px"
      backgroundColor={tagProps.bg}
      color="white"
    >
      {tagProps.text}
    </Tag>
  );
};

export default {...MDXComponents, IntroTag: IntroTag};
