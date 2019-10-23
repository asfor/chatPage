import React from 'react'

import { store, Store } from './store/store'
import { Provider, defineSetStore } from './Context'

import Title from './components/Title'
import Dialog from './components/Dialog'
import Input from './components/Input'

import './App.css'

import myself from './static/myself.jpeg'
import contact from './static/contact.jpeg'

interface State {
  store: Store
}

// 由于函数式组件的 useEffect(fn, []) 中，[state, _] = useState 定义的 state 会在 fn 中锁定，因此改用 class 写
class App extends React.PureComponent<{}, State> {
  state = { store: store }

  componentDidMount() {
    defineSetStore(this.setStore)

    // TODO: 拉取公共信息
    this.setStore(mockData)
  }

  render() {
    return (
      <Provider value={this.state.store}>
        <Title />
        <Dialog />
        <Input />
      </Provider>
    )
  }

  setStore = (newStore: Store, cb?: () => void) => this.setState({ store: { ...this.state.store, ...newStore } }, cb)
}

const mockData: Store = {
  myself: { avatar: myself, name: '天气预报' },
  contact: { avatar: contact, name: '月亮邮递' }
}

export default App