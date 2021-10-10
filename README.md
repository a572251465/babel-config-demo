## babel-config

### plugin

```
  1. 可以配置方法<@babel/plugin-transform-arrow-functions>进行es6箭头函数的单独转换
```

### presets

```
  1. 可以使用预设<@babel/preset-env>的形式来进行转换
  2. @babel/preset-env 默认就是@babel/preset-es2015、@babel/preset-es2016和@babel/preset-es2017三个套餐的叠加
  3. 通过参数属性<targets>来进行浏览器版本的控制
  4. 预设中可以指定include数组来进行某一项的转换，例如: "include": ["@babel/plugin-transform-arrow-functions"]
```

### polyfill

```
  1. 使用polyfill做中间垫片的时候，webpack会将有用以及无用的内容都引入进去，同时还会污染全局变量
  2. 从babel7.4 之后不再使用polyfill, 使用了corejs 以及regenerator 来代替
  3. 从此配置中多余了属性<useBuiltIns>, <corejs>
  4. useBuiltIns这个属性决定是否引入polyfill，可以配置三个值：false（不引入）、usage（按需引入）和entry（项目入口处引入）；corejs表示引入哪个版本的core-js，可以选择2（默认）或者3，只有当useBuiltIns不为false时才会生效。
```

### runtime

```
  1. 通过预设preset-env进行代码转换的过程中会出现很多函数注入，如果每个文件都需要注入，所以文件体积很大
  2. babel使用额外的npn包来管理helper辅助函数
  3. 可以在plugins中配置插件<@babel/transform-runtime> 进行第三包引入
  4. 如果转换影响了部分全局变量，可以在3中的参数中添加{"corejs": 3} 来将方法进行第三方包引入
```

### @babel/polyfill 以及@babel/runtime 的区别

```
  1. @babel/runtime 让你的浏览器拥有本来不支持的特性
  2. @babel/polyfill 改造你的代码，让你的代码能在所有目标浏览器上运行，但不改造浏览器
```

### 执行顺序

```
  1. 插件比预设先执行
  2. 插件的执行顺序在数组中是从前往后
  3. 预设的执行顺序是数组中从后往前
```

### 注意点

```
  1. 从Babel7.4开始@babel/polyfill就不推荐使用了，而是直接引入core-js与regenerator-runtime两个包
```
