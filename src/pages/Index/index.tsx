/*
 * @Author: moling
 * @Date: 2022-06-23 10:49:48
 * @LastEditTime: 2022-06-23 14:34:56
 * @LastEditors: your name
 * @Description: 
 * @FilePath: /lowcode-collection/cms-lowcode-engine/cms-lowcode-engine-client/src/pages/Index/index.tsx
 */
import React from 'react'
import type { FC } from 'react';

import { Tabs } from 'antd';
import LowcodeEngine from '@/components/base/LowcodeEngine';

import './index.less';

const Index: FC<unknown> = () => {
  return (
    <div className='index-container'>
      <Tabs style={{height: '100%'}}>
        <Tabs.TabPane tab="AAA" key="1">
          test content
        </Tabs.TabPane>
        <Tabs.TabPane tab="BBB" key="2">
          <LowcodeEngine />
        </Tabs.TabPane>
      </Tabs>
    </div>
  )
}

export default Index