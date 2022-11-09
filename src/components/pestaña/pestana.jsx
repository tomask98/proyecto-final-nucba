import React from 'react'

const pestana = (props)=> {
  document.title = "+plantas-" + props.title
    return (
    <div className='w-100'>{props.children}</div>
  )
}

export default pestana