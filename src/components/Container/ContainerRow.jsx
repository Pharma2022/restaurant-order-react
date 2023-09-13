import React from 'react'

const ContainerRow = ({children,className}) => {
  return (
    <div className={`flex-row space-between align-center ${className}`} >{children}</div>
  )
}

export default ContainerRow