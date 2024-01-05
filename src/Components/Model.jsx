import React from 'react'
import Bookcard from './Bookcard'

const Model = ({onclose}) => {
  return (
    <div className="modelContainer">
      <div className='modelRight'>
          <button onClick={onclose} className='closeBtn'>X</button>
          <div className='content'>
            <Bookcard/>
          </div>
      </div>
    </div>
  )
}

export default Model