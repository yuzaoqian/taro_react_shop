import React, { useEffect, useState } from 'react'
import { useDidShow, useDidHide } from '@tarojs/taro'

import { ConfigProvider } from "@nutui/nutui-react-taro";
import enUS from '@nutui/nutui-react-taro/dist/locales/en-US'
import zhCN from '@nutui/nutui-react-taro/dist/locales/zh-CN'

// 全局样式
import './app.scss'

function App(props) {
  const [locale, setLocale] = useState(zhCN);

  const toggleLocale = () => {
    console.log('toggleLocale');
    setLocale((prevLocale) => (prevLocale === zhCN ? enUS : zhCN));
  };

  // 可以使用所有的 React Hooks
  useEffect(() => { })

  // 对应 onShow
  useDidShow(() => { })

  // 对应 onHide
  useDidHide(() => { })

  return (
    <ConfigProvider locale={locale}>
      {props.children}
    </ConfigProvider>
  );
}

export default App
