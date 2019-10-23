import React from 'react'

import Icon from '../../Icon'

const tools: string[] = [
  'emoji',
  'file',
  'message'
]

const Tools: React.FC = () => (
  <div id="tools">
    {tools.map(tool => <Icon key={tool} type={tool} />)}
  </div>
)

export default Tools