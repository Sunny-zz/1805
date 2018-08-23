import React from 'react'
import ReactDOM from 'react-dom'
import './golbal.css'
import App from './components/App/App'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import store from './store'
// Provider 可以将redux中的store数据动态提供给react组件
// 如何提供 其实 Provider 可以被当做一个组件 我们将 app 组件放在 Provider 组件内，给 Provider 传递一个 store 属性，属性为 我们定义 store 这样 app 组件及其子组件就可以动态订阅 store 中的数据了
// react 组件可以使用 react-redux 包下的 connect 订阅 store 中的数据
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
