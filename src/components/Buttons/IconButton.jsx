import React from 'react'

const IconButton = ({children,className,...rest}) => {
  return (
    <span className={`icon ${className}`} {...rest}  >{children}</span>
  )
}

export default IconButton