// wx 语法

// 1. 数据绑定
// 文本或属性上都必须使用插值表达式

// 2. 列表渲染
// wx:for = {{ object | array }}
// wx:key (在表单选择中使用)
// wx:for-item = variable
// wx:for-index = variable

// wx:for 建议在 <block> 上使用,因为 <block> 不是组件,而是包裹元素,是不会渲染在页面的


// 3. 条件渲染
// wx:if = {{ condition }}
// wx:elif = {{ condition }}
// wx:else = {{ condition }}

// wx:if 建议在 <block> 上使用

// 4. 模板
// 定义模板 (唯一标识 name)
// <template name="temp-name"></template>

// 使用模板 (is 控制模板切换 name, data 来自外部需传入模板的数据)
// <template is="temp-name" data="..." />

// 注意: 模板有自己的作用域

// 5. 引用 (import, include)
// <import src="temp-path" /> 
// <include src="temp-path" /> 

// import 有自身作用域(A import B, B import C,故 A 无法使用 C, A,B,C均为模板)
// include 是除了 template,其它都完全拷贝到 <include src="temp-path">