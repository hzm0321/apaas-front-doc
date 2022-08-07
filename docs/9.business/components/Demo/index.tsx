import React, {useMemo, useState} from 'react';
import {DataSet, Button, Table} from 'choerodon-ui/pro';
import { FieldType } from 'choerodon-ui/pro/lib/data-set/enum';
import {observer} from "mobx-react-lite";

// import 'choerodon-ui/lib/button/style/css'; // 加载 CSS

interface Props {
}

const tempTableData = [
  {
    userid: 1,
    name: 'hzm',
    age: 24,
    sex: '男',
    enable: true,
  },
  {
    userid: 2,
    name: 'xxx',
    age: 24,
    sex: '女',
    enable: false,
  },
];

const Demo: React.FC<Props> = () => {
  const [count, setCount] = useState(0);
  const tableDs = useMemo(() => {
    return new DataSet({
      primaryKey: 'userid',
      name: 'user',
      autoQuery: false,
      pageSize: 5,
      data: tempTableData,
      fields: [
        {
          name: 'userid',
          type: FieldType.string,
          label: '编号',
          required: true,
        },
        {
          name: 'name',
          type: FieldType.intl,
          label: '姓名',
        },
        {
          name: 'age',
          type: FieldType.number,
          label: '年龄',
          max: 100,
          step: 1,
        },
        {
          name: 'sex',
          type: FieldType.string,
          label: '性别',
          required: true,
        },
        { name: 'enable', type: FieldType.boolean, label: '是否开启' },
      ],
    })
  },[])
  const handleClick = () => {
    setCount(v => v + 1)
  }

  const columns = useMemo(() => {
    return [
      { name: 'userid' },
      { name: 'name', editor: true },
      { name: 'age', editor: true },
      { name: 'sex', editor: true },
      { name: 'enable', editor: true },
    ];
  }, []);

  return (
    <div>
      <Button color="primary" onClick={handleClick}>按钮{count}</Button>
      <Table
        key="basic"
        rowNumber={({ text }) => `#${text}`}
        dataSet={tableDs}
        columns={columns}
      />
    </div>
  );
};

export default observer(Demo);
