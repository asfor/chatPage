import { User, Message } from './struct'

// store 存储全局共用信息
export interface Store {
  title?: string
  myself?: User
  contact?: User
  messages?: Message[]
}

// default value
export const store: Store = {
  title: '',
  myself: { avatar: '', name: '' },
  contact: { avatar: '', name: '' },
  messages: []
}