import React from 'react'

const SubmitBtn = ({children,className, ...rest}) => {
  return (
    // add default classname for button
    <button className={` ${className}`} {...rest}>{children}</button>
  )
}

export default SubmitBtn