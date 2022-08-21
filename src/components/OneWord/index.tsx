import React, {useEffect, useState} from 'react';
import axios from 'axios';

import styles from './index.module.scss';

interface Props {
}

const OneWord: React.FC<Props> = () => {
  const [data, setData] = useState<any>({});

  useEffect(() => {
    axios.get('https://v1.hitokoto.cn/?c=k&c=i&c=d').then((res) => {
      if (res.status === 200) {
        setData(res.data)
      }
    })
  }, [])

  return (
    <div className={styles.wrapper}>
      <div className={styles.word}>
        『 {data.hitokoto}』
      </div>
      <div className={styles.who}>
        —— {data.from_who} 「{data.from}」
      </div>
    </div>
  );
};

export default OneWord;
