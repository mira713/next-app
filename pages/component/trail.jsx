import React ,{useState} from 'react'

const Trial = () => {
    let [count, setCount] = useState(0)
  return (
    <>
    <div>My first deployed App</div>
    <h1>counter : {count}</h1>
    <button onClinc={()=>setCount(count+1)}>INC</button>
    <button onClinc={()=>setCount(count-1)}>DEC</button>
    </>
  )
}

export default Trial