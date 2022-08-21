import React, { useMemo, useState } from 'react';
import { Avatar, Tooltip } from 'antd';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { has } from 'lodash';

export default function MDXIntro({ title="此篇维护者",authors = [] }) {
  const { siteConfig } = useDocusaurusContext();
  const [tooltipVisible, setTooltipVisible,] = useState(false);

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

  return <Avatar.Group
    style={{
      alignItems: 'center',
      padding: '10px',
      width: '100%',
      border: '1px solid var(--ifm-color-emphasis-300)',
      borderRadius: 'var(--ifm-pagination-nav-border-radius)'
    }}
  >
    <span style={{ marginRight: '18px' }}> {title}:</span>
    {showAuthorsData.map((author) =>
      <Tooltip
        visible={tooltipVisible}
        getPopupContainer={ (triggerNode) => triggerNode?.parentNode }
        title={`${author.job_no} ${author.name}`}
        placement="top"
        onMouseEnter={()=> setTooltipVisible(true)}
        onMouseLeave={()=> setTooltipVisible(false)}
      >
      <Avatar onClick={()=> handleOpenUrl(author.url)} alt={author.name}  src={author.image_url} style={{ cursor: 'pointer' }} />
    </Tooltip>)}
  </Avatar.Group>;
}
