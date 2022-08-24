import React, { useMemo } from 'react';
import { Avatar, Tooltip } from 'antd';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { has } from 'lodash';

import styles from './maintainer.module.less';

export default function MDXIntro({ title="此篇维护者",authors = [] }) {
  const { siteConfig } = useDocusaurusContext();

  const authorsData = siteConfig.customFields.authors;

  const showAuthorsData = useMemo(() => {
    const _authors = [];
    authors.forEach(author => {
      if (has(authorsData, author)) {
        _authors.push(authorsData[author]);
      }
    });
    return _authors;
  }, [authors, authorsData]);

  const handleOpenUrl = (url) => {
    url && window.open(url);
  }

  return <Avatar.Group className={styles.wrapper}>
    <span style={{ marginRight: '18px' }}> {title}:</span>
    {showAuthorsData.map((author) =>
      <Tooltip
        getPopupContainer={ (triggerNode) => triggerNode?.parentNode }
        title={`${author.job_no} ${author.name}`}
        placement="top"
      >
      <Avatar onClick={()=> handleOpenUrl(author.url)} alt={author.name}  src={author.image_url} style={{ cursor: 'pointer' }} />
    </Tooltip>)}
  </Avatar.Group>;
}
