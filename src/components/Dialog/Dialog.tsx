import React, { useContext, useState, useEffect, useCallback, useRef } from 'react'

import { context, setStore } from '../../Context'
import { MessageType, Message as MessageProps } from  '../../store/struct'
import Message from './Message'

import './Dialog.css'

import pic1 from '../../static/pic1.jpg'

const GET_NUM = 10
const Dialog: React.FC = () => {
  const { messages = [] } = useContext(context)
  const [loading, setLoading] = useState(false)
  const view: any = useRef<HTMLDivElement>(null)

  // 获取聊天记录
  const getMessages = useCallback(() => {
    setLoading(true)

    const newData = getData(messages.length, GET_NUM)
    const newList = [...newData, ...messages]

    setTimeout(() => {
      setLoading(false)
      setStore({ messages: newList })
    }, 500)
  }, [messages])

  // 滚动事件处理
  const onScroll = useCallback(
    () => !loading && view.current.scrollTop === 0 && getMessages(),
    [loading, getMessages]
  )

  useEffect(getMessages, [])

  return (
    <div id="dialog" ref={view} onScroll={onScroll}>
      {/* TODO: 加载图换成菊花转 */}
      {loading && (
        <div style={{
          color: '#aaa',
          fontSize: 12,
          textAlign: 'center',
          marginBottom: 5
        }}>Loading...</div>
      )}

      {messages.map(info => <Message key={info.id} {...info} />)}
    </div>
  )
}

/**
 * 获取聊天记录
 * @param offset 从第几条开始取
 * @param num 取几条数据
 */
function getData(offset: number, num: number): MessageProps[] {
  // TODO: 发送请求 or 读取本地缓存
  const end = mockData.length - offset
  const start = (end < num) ? 0 : (end - num)

  return mockData.slice(start, end)
}

const mockData: MessageProps[] = [
  { id: 1001, type: MessageType.Normal, mine: true, content: '咋啦' },
  { id: 1002, type: MessageType.Normal, mine: false, content: '你之前买乳胶枕的时候对床垫有研究吗' },
  { id: 1003, type: MessageType.Normal, mine: true, content: '额床垫' },
  { id: 1004, type: MessageType.Normal, mine: true, content: '这个还真没研究了' },
  { id: 1005, type: MessageType.Normal, mine: true, content: '￼因为我床垫都是现成的' },
  { id: 1006, type: MessageType.Normal, mine: false, content: '这个市场 有点。。' },
  { id: 1007, type: MessageType.Normal, mine: false, content: '700的和三四千的一模一样' },
  { id: 1008, type: MessageType.Normal, mine: true, content: '噗' },
  { id: 1009, type: MessageType.Normal, mine: true, content: '这怎么买。。' },
  { id: 1010, type: MessageType.Normal, mine: false, content: '都不知道怎么看质量啊' },
  { id: 1011, type: MessageType.Normal, mine: true, content: '不是行家看不来的吧' },
  { id: 1012, type: MessageType.Normal, mine: true, content: '而且网上买咋看啊' },
  { id: 1013, type: MessageType.Normal, mine: true, content: '价格区间差好多啊' },
  { id: 1014, type: MessageType.Normal, mine: true, content: '网上也是' },
  { id: 1015, type: MessageType.Normal, mine: true, content: '那只能找个风评还可以的了' },
  { id: 1016, type: MessageType.Normal, mine: true, content: '不然没法快速鉴别了' },
  { id: 1017, type: MessageType.Normal, mine: true, content: '我看懵了' },
  { id: 1018, type: MessageType.Normal, mine: true, content: '哎头疼' },
  { id: 1019, type: MessageType.Normal, mine: true, content: '我在等公交了' },
  { id: 1020, type: MessageType.Normal, mine: false, content: '23333' },
  { id: 1021, type: MessageType.System, mine: false, content: '对方撤回了一条消息' },
  { id: 1022, type: MessageType.Normal, mine: true, content: '我太惨了' },
  { id: 1023, type: MessageType.Normal, mine: true, content: '刚才吹了半个小时风都没等到' },
  { id: 1024, type: MessageType.Normal, mine: true, content: '用手机查了才发现，我等的那班车停运了' },
  { id: 1025, type: MessageType.Picture, mine: true, content: pic1 },
  { id: 1026, type: MessageType.Normal, mine: false, content: '。。。' },
  { id: 1027, type: MessageType.Normal, mine: false, content: '哈哈哈哈啊哈哈哈笑死我了' },
  { id: 1028, type: MessageType.System, mine: false, content: '你撤回了一条消息' },
]

export default Dialog