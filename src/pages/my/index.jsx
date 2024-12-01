import { Text, View, Image } from '@tarojs/components'

import { Button, Avatar } from '@nutui/nutui-react-taro'

import './index.scss'


definePageConfig({
  navigationBarTitleText: '个人中心',
  backgroundColor: '#a6a6a6'
})


function handleTest() {
  console.log('测试')
}

function Index() {
  return (
    <>
      <View className='page'>
        <View className='header'>
          <View className='status-bar'></View>
          <View className='header-navbar'>
            <View className='nav-left'></View>
            <View className='nav-center'>
              <View className='nav-title'>个人中心</View>
            </View>
            <View className='nav-right'></View>
          </View>

          <View className='header-user'>
            <View className='user-avatar'>
              <Avatar
                size="large"
                src="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
              />
            </View>
            <View className='user-name'>张三</View>
            <View className='user-phone'>13000000000</View>
          </View>
        </View>
        <Text className="test">测试全局皮肤</Text>
        <Button onClick={handleTest}>测试</Button>
      </View>
    </>
  )
}


export default Index
