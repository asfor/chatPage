import React, { useContext } from 'react'

import { context } from '../../Context'
import Icon from '../../Icon'

import './Title.css'

const Title: React.FC = () => {
  const { contact } = useContext(context)

  return (
    <header id="title">
      {(contact || {}).name}

      <span className="title-right">
        <Icon type="user" />
      </span>
    </header>
  )
}

export default Title