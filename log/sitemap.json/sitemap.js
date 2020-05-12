// sitemap.json, 没有文件 sitemap.json,则默认全部被索引

const json = {
  rules: [{
    priority: (number), // number 值越大,索引匹配的优先级越高
    action: 'allow' | 'disallow', // 页面是否被索引
    page: '*' | '具体页面路径',
  }]
}