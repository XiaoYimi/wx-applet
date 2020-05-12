// app.json

const json = {
  tabBar: {
    color: '选项文本颜色',
    selectedColor: '选项选中的文本颜色',
    backgroundColor: '选项的背景颜色',
    borderStyle: 'black' | 'white',
    position: 'top' | 'bottom',
    custom: false, // 是否自定义
    list: [{
      pagePath: '页面路由地址',
      text: '选项文本',
      iconPath: '选项的图标(<40, 81*81)',
      selectedIconPath: '选项选中的图标'
    }]
  }
}
