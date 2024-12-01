export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/category/index',
    'pages/cart/index',
    'pages/my/index'
  ],
  tabBar: {
    color: '#252525',
    selectedColor: '#08D2D3',
    backgroundColor: '#fff',
    borderStyle: 'black',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: 'assets/images/tabbar/home.png',
        selectedIconPath: 'assets/images/tabbar/home-active.png'
      },
      {
        pagePath: 'pages/category/index',
        text: '分类',
        iconPath: 'assets/images/tabbar/category.png',
        selectedIconPath: 'assets/images/tabbar/category-active.png'
      },
      {
        pagePath: 'pages/cart/index',
        text: '购物车',
        iconPath: 'assets/images/tabbar/cart.png',
        selectedIconPath: 'assets/images/tabbar/cart-active.png'
      },
      {
        pagePath: 'pages/my/index',
        text: '我的',
        iconPath: 'assets/images/tabbar/my.png',
        selectedIconPath: 'assets/images/tabbar/my-active.png'
      }
    ]
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '商城',
    navigationBarTextStyle: 'black'
  }
})
