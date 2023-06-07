import React,{useState} from 'react'
import './Question3.css'

const Question3 = () => {
  const [data, setData] = useState(false);

  const handleClick = () => {
    setData(!data);
  };

  

  return (
    <div className='wrapper'>
      <button className='color' style={{ backgroundColor: data ? 'red' : 'blue'}} onClick={handleClick}>
        {data ? 'True' : 'False'}
      </button>
      <span>Color Changes according to boolean value</span>
    </div>
  );
}

export default Question3
