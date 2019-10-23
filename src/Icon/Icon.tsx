import React from 'react'

import './Icon.css'

interface Props { type: string }

const Icon: React.FC<Props> = props => (
  <i
    className={`iconfont icon-${props.type}`}
    {...props}
  />
)

export default Icon