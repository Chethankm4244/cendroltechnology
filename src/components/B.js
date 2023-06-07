import React, { useState } from 'react'
import  {cendrol} from './A'
import './B.css'

const B = () => {
    const [data,setData]=useState(cendrol)
  return (
    <div className='increase'>
       <p>{data}</p>
       <button onClick={() => setData(data + 10)}>Click here to increase the count by 10</button>
    </div>
  )
}

export default B;
