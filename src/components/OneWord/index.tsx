import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Center} from '@chakra-ui/react'

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
    <>
      <Center className="hero__subtitle">
        『 {data.hitokoto}』
      </Center>
      <Center>
        —— {data.from_who} 「{data.from}」
      </Center>
    </>
  );
};

export default OneWord;
