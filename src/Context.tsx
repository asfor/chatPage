import React from 'react'

import { Store, store } from './store/store'

interface SetStore {
  (store: Store): void
}

interface MapStoreToProps {
  (store: Store): Object
}

/** get 部分 **/
export const context = React.createContext(store)
export const { Provider, Consumer } = context

// 仅用于 class 组件，函数式组件用 useContext 即可
export const connect = (mapStoreToProps: MapStoreToProps) => (Component: React.ComponentClass) => (props: React.Props<any>) => (
  <Consumer>
    {store => {
      const injectProps = mapStoreToProps(store)

      return <Component {...injectProps} {...props} />
    }}
  </Consumer>
)



/** set 部分 **/
export let setStore: SetStore = () => {}

// 定义函数用一次即销毁
let defined = false
export const defineSetStore = (func: SetStore) => {
  if (defined) return

  setStore = func
  defined = true
}
