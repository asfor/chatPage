import React, { useContext } from 'react'

import { context } from '../../../Context'
import { MessageType, Message as MessageProps } from '../../../store/struct'

import './Message.css'

const Message: React.FC<MessageProps> = props => {
  switch (props.type) {
    case MessageType.Normal: return <NormalMessage {...props} />
    case MessageType.Picture: return <PictureMessage {...props} />
    case MessageType.System: return <SystemMessage {...props} />
  }
}

// message templates
const NormalMessage: React.FC<MessageProps> = props => (
  <div className={`dialog-message ${props.mine ? 'me' : 'you'}`}>
    <Avatar mine={props.mine} />
    <div className="dialog-message-content">{props.content}</div>
  </div>
)

const PictureMessage: React.FC<MessageProps> = props => (
  <div className={`dialog-message ${props.mine ? 'me' : 'you'}`}>
    <Avatar mine={props.mine} />

    <div className="dialog-message-content">
      <img src={props.content} alt=""/>
    </div>
  </div>
)

const SystemMessage: React.FC<MessageProps> = props => <div className="dialog-message-system">{props.content}</div>


interface AvatarProps {
  mine: boolean
}

const Avatar: React.FC<AvatarProps> = ({ mine = false }) => {
  const store = useContext(context)
  const user = mine ? store.myself : store.contact

  return <img className="dialog-avatar" src={(user || {}).avatar} alt=""/>
}

export default Message