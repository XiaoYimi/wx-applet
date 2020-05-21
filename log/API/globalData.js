// globalData 

/*
个人理解: 小程序中 globalData 类似 Vue 中的状态管理模式 (Vuex)

globalData 场景
1. 全局状态管理模式(Vuex)
2. 全局变量

特别注意
重启会使 globalData 初始化;
如果想使数据持久化,可使用 Storage 来缓存.
*/

// 初始化设置
new App({
  globalData: {}
})

// 获取实例读取或写入
const app = getApp()

// 写入
app.globalData.custome_property = custome_value;

// 读取
app.globalData.custome_property
