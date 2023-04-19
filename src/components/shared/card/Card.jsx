import React from 'react'

const Card = ({children, className}) => {
  return (
    <div className={`p-[1.6rem] gap-[1.2rem] sm:my-10  ${className} `}>
        {children}
    </div>
  )
}

export default Card