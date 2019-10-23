import React, { useState, useContext, useCallback } from 'react'

import { context, setStore } from '../../Context'
import { Message, MessageType } from '../../store/struct'
import Tools from './Tools'

import './Input.css'

const Input: React.SFC = () => {
  const [content, setContent] = useState('')
  const { messages = [] } = useContext(context)

  const onKeyPress = useCallback(e => {
    if (e.key === 'Enter' && !e.shiftKey) {
      const newMsg: Message = { id: Date.now(), type: MessageType.Normal, mine: true, content }

      // TODO: 提交数据
      setStore({ messages: [...messages, newMsg] })
      setTimeout(() => setContent(''), 0)
    }
  }, [content, messages])

  return (
    <div id="input">
      <Tools />

      <textarea
        cols={30}
        rows={7}
        value={content}
        onChange={e => setContent(e.target.value)}
        onKeyPress={onKeyPress}
      />
    </div>
  )
}

export default Input