import React, { useState } from 'react'
import "./design.css"

function Changevalue_n() {
  const [num, setNum] = useState(202103103510401);

  const inceremet = () => {
    setNum(num + 1);
  }
  const decrement = () => {
    setNum(num - 1);
  }

  return (
    <div className='heading'>
      <div className="card-design">
        <h1 className="text-design">{num}</h1>
        <div className='btn'>
          <button className="button-design" onClick={inceremet}>Increment</button>
          <button className="button-design" onClick={decrement} >Decrement</button>
        </div>
      </div>
    </div>
  )
}

export default Changevalue_n;