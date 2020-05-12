// 定义组件
// 1. 在 components 下创建组件文件(child)
// 2. 在 child.json 中定义 component = true,表示自定义组件,如下：

// child.json
const json = {
  "component": true,
  useingComponents: {} // 使用其它组件
}

// 3. 在 child.js 定义组件构造器 Component

// child.js
Component({
  options: { 
    multipleSlots: true, // 启用多 slot 支持
    pureDataPattern: /^_/, // 指定以 _ 开头的纯数据字段
  }, 
  properties: {
    props: {
      type: Number,
      value: 'default-value'
    }
  },
  data: {}, // 组件数据
  methods: {}, // 组件方法 
  behaviors: [], // 可复用的方法
  computed: {}, // 基础库 > 2.6.1, 并安装 npm i miniprogram - computed
  watch: {}, // 基础库 > 2.6.1, 并安装 npm i miniprogram - computed
  observers: { /* 类似 Vue 中 watch */ },
  lifetimes: {
    attached () {},
    detached () {}
  }
})


// 使用组件
// 1. 在父组件 parent.json 引用
 usingComponents: {
   comp_name: 'comp_url'
 }

//  2. 在父组件 parent.wxml 中使用
const wxml = '<comp_name></comp_name>'


///////////////////////////////////////////////////////////////////////


// 父组件可直接访问子组件实例的任意数据和方法 (this.selectComponent)
// 子组件定义可触发事件 (this.triggerEvent, 类似 Vue 中 this.$emit)
