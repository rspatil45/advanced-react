import { useState } from 'react'

const UseStateBasics = () => {
  console.log(useState(1));

  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count+1);
  }
  return <h2>     
    <h4>You clicked {count}</h4>
    <button type="button" onClick={handleClick}>Click me</button>
  </h2>
}

export default UseStateBasics
