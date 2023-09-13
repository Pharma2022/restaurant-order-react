import React from 'react'

const ContainerCol = ({children,className}) => {
  return (
    <div className={`flex-col justify-center ${className}`}>{children}</div>
  )
}

export default ContainerCol