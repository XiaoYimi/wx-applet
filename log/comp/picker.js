// 底部弹窗选择器 场景

// 日期选择
// 时间选择
// 单项列表选择
// 地理位置选择
// 自定义级联选择

mode = 'date' | 'time' | 'selector' | 'region' | 'multiSelector'

// range(数组列表), range-key(数组项 key 值作为显示内容) 只在 mode = 'region' | 'multiSelector' 有效


// 重点
mode = 'multiSelector'

// 注意: bindchange 必须在 

const json = {
  range: data,
  'range-key': name,
  mutilIndex: [0, 0, 0]
}

// 数据结构
data = [
  [
    { p: null, name: '广东', code: '516468' },
    { p: null, name: '北京', code: '110000' }
  ],
  [
    { p: '516468', name: '汕尾', code: '51646811' },
    { p: '516468', name: '揭阳', code: '51646812' },
    { p: '516468', name: '北大', code: '11000011' },
    { p: '516468', name: '清华', code: '11000012' }
  ],
  [
    { p: '51646811', name: '海丰', code: '5164681145' },
    { p: '51646811', name: '陆丰', code: '5164681246' },
    { p: '516468', name: '北大', code: '11000011' },
    { p: '516468', name: '清华', code: '11000012' }
  ]
]

// 初始化 onLoad
 const mutilIndex = this.mutilIndex
 let data = [] // 请求来的数据(保存一份在 storage, 或者纯静态文件)
 data[0] = this.data[0]
 

 function dealData (mutilIndex) {
   for (let i=0; i<mutilIndex.length; i++) {
     if (mutilIndex[i]) {
      switch (mutilIndex[i]) {
        case 0: 

        case 1: 

        case 2:

        default: break;
      }
     }
   }
 }
