// custome-ul
Component({
  relations: {
    './custome-li': {
      linked () { /* 在组件生命周期 attached 后执行 */ },
      linkChanged () { /* 在组件生命周期 move 后执行 */ },
      unlinked () { /* 在组件生命周期 detached 后执行 */ }
    }
  }
})