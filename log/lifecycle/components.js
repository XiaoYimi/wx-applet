// components.js

// lifetimes (>2.2.3) 的优先级更高，推荐写法

const lifecycle = {
  lifetimes: {
    created() {/* 组件实例被创建时,this.data 不可用 */ },
    attached() {/* 组件进入页面节点,可进行初始化工作 */ },
    ready() {/* 组件完成视图布局 */ },
    moved() {/* 组件dom节点位置改变 */ },
    detached() {/* 组件移出页面节点 */ },
    error() {/* 组件有报错信息 */ }
  },
  // 组件在页面的生命周期
  pageLifetimes: {
    show () {},
    hide () {},
    resize () {}
  },

  // < 2.2.3 写法
  created () {/* 组件实例被创建时,this.data 不可用 */},
  attached() {/* 组件进入页面节点,可进行初始化工作 */},
  ready() {/* 组件完成视图布局 */},
  moved() {/* 组件dom节点位置改变 */},
  detached() {/* 组件移出页面节点 */},
  error() {/* 组件有报错信息 */}
}