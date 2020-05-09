import * as React from 'react';
import { useState } from 'react';
import { Space, Radio, Button } from 'antd';
import { SizeType } from 'antd/lib/config-provider/SizeContext';

function SpaceEx() {
  const [size, setSize] = useState<SizeType>('small');
  return (
    <div>
      <Radio.Group value={size} onChange={e => setSize(e.target.value)}>
        <Radio value="small">Small</Radio>
        <Radio value="middle">Middle</Radio>
        <Radio value="large">Large</Radio>
      </Radio.Group>
      <br />
      <br />
      <Space size={size}>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="link">Link</Button>
      </Space>
    </div>
  );
}

export default SpaceEx;