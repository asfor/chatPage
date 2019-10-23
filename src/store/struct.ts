export interface User {
  avatar: string
  name: string
}

export enum MessageType {
  Normal,
  Picture,
  System
}

export interface Message {
  readonly id: number
  readonly type: MessageType
  readonly mine: boolean
  readonly content: string
}