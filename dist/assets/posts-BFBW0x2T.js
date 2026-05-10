const e=[{id:1,title:"Vue 3 组合式 API 入门",date:"2026-04-20",tags:["Vue","JavaScript"],excerpt:"组合式 API 是 Vue 3 最重要的特性之一，它提供了一种更灵活的方式来组织组件逻辑。本文介绍 setup、ref、reactive 等核心概念。",content:`
      <p>Vue 3 的组合式 API（Composition API）让代码组织更加灵活，特别适合大型项目。</p>
      <h2>为什么需要组合式 API？</h2>
      <p>在 Vue 2 的选项式 API 中，组件的逻辑按选项类型（data、methods、computed）分散在不同位置。当组件变得复杂时，理解和维护代码变得困难。</p>
      <p>组合式 API 允许将同一功能的逻辑放在一起，使代码更易于阅读和复用。</p>
      <h2>核心概念</h2>
      <h3>setup 函数</h3>
      <p>setup 是组合式 API 的入口，在组件创建之前执行。<code>setup</code> 中定义的变量和方法可以直接在模板中使用。</p>
      <h3>ref 和 reactive</h3>
      <p>ref 用于包装基本类型数据使其变为响应式，reactive 用于包装对象类型。</p>
      <blockquote>组合式 API 不是选项式 API 的替代品，而是补充。你可以根据需要混合使用。</blockquote>
    `},{id:2,title:"Vite — 新一代前端构建工具",date:"2026-04-25",tags:["Vite","前端工具"],excerpt:"Vite 利用浏览器原生 ES 模块支持，实现了极速的开发服务器启动和热更新。",content:`
      <p>Vite 是由 Vue 作者尤雨溪开发的新一代前端构建工具，它在开发体验上远超传统的 Webpack。</p>
      <h2>核心优势</h2>
      <h3>极速冷启动</h3>
      <p>Vite 利用浏览器原生 ES 模块，不需要像 Webpack 那样预先打包整个应用。开发服务器启动时间通常在 1 秒以内。</p>
      <h3>即时热更新</h3>
      <p>无论项目多大，HMR 速度都保持在毫秒级别，因为它只需要使修改的模块失效。</p>
      <h2>生产构建</h2>
      <p>生产环境下 Vite 使用 Rollup 进行打包，输出高度优化的静态资源。</p>
      <blockquote>Vite 已经成为 Vue 官方推荐的项目创建工具，也支持 React、Svelte 等框架。</blockquote>
    `},{id:3,title:"Element Plus 组件库使用技巧",date:"2026-05-01",tags:["Element Plus","UI 组件","Vue"],excerpt:"Element Plus 是 Vue 3 生态中最流行的 UI 组件库之一。本文分享一些实用的使用技巧和最佳实践。",content:`
      <p>Element Plus 提供了超过 80 个高质量组件，涵盖了企业级应用的大部分需求。</p>
      <h2>按需导入</h2>
      <p>推荐使用 unplugin-vue-components 实现组件自动导入，无需手动注册组件，构建时还会自动 tree-shaking。</p>
      <h3>配置示例</h3>
      <p>在 <code>vite.config.js</code> 中配置 <code>ElementPlusResolver</code> 即可自动解析 Element Plus 组件。</p>
      <h2>常用组件速览</h2>
      <p><code>el-table</code> 表格组件支持排序、筛选、分页、固定列等功能。</p>
      <p><code>el-form</code> 表单组件提供完整的验证机制。</p>
      <p><code>el-dialog</code> 对话框适合展示弹窗内容。</p>
      <blockquote>善用 Element Plus 的布局组件（el-container、el-row、el-col）可以快速搭建页面骨架。</blockquote>
    `},{id:4,title:"Vue Router 路由管理指南",date:"2026-05-05",tags:["Vue Router","路由"],excerpt:"在单页应用中，路由是核心机制之一。Vue Router 4 为 Vue 3 提供了强大而灵活的路由功能。",content:`
      <p>Vue Router 是 Vue.js 官方的路由管理器，深度集成了 Vue 核心。</p>
      <h2>基本配置</h2>
      <p>使用 <code>createRouter</code> 创建路由实例，选择 history 模式（HTML5 History 或 Hash 模式）。</p>
      <h3>动态路由</h3>
      <p>通过 <code>/user/:id</code> 这样的路径参数，可以匹配同一组件对不同数据的展示。</p>
      <h3>嵌套路由</h3>
      <p>子路由通过 <code>children</code> 配置，配合 <code>&lt;router-view&gt;</code> 在父组件中渲染。</p>
      <h2>导航守卫</h2>
      <p>路由守卫可以在导航前后执行逻辑，例如权限检查、页面标题更新等。</p>
      <blockquote>懒加载路由组件可以显著减小初始包体积，Vite 会自动处理代码分割。</blockquote>
    `},{id:5,title:"CSS Flexbox 布局完全指南",date:"2026-05-08",tags:["CSS","布局"],excerpt:"Flexbox 是现代 CSS 布局的基础，掌握它可以轻松实现各种复杂的页面布局效果。",content:`
      <p>Flexbox（弹性盒子）是 CSS3 引入的一种一维布局模型，非常适合处理行或列方向的元素排列。</p>
      <h2>容器属性</h2>
      <h3>flex-direction</h3>
      <p>决定主轴方向：<code>row</code>（默认）、<code>column</code>、<code>row-reverse</code>、<code>column-reverse</code>。</p>
      <h3>justify-content</h3>
      <p>沿主轴对齐子元素：<code>flex-start</code>、<code>center</code>、<code>space-between</code>、<code>space-around</code> 等。</p>
      <h3>align-items</h3>
      <p>沿交叉轴对齐子元素：<code>stretch</code>（默认）、<code>center</code>、<code>flex-start</code>、<code>flex-end</code>。</p>
      <h2>子元素属性</h2>
      <p><code>flex-grow</code> 控制元素如何分配剩余空间，<code>flex-shrink</code> 控制空间不足时的收缩比例。</p>
      <blockquote>Flexbox 适合一维布局，二维布局请使用 CSS Grid。两者配合使用可以实现几乎所有布局需求。</blockquote>
    `}];export{e as p};
