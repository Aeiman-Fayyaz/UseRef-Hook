// UseRef Hook

import React , {useRef} from "react";

export default function InputFocus (){

  // Create Reference - Use for target input
  const inputData = useRef()

  // Create function
  const handleBtn = () => {
    inputData.current.focus()
  }

  return(
    <div>
      <input type = "text" ref = {inputData} placeholder = "Enter Your Name" />
      <button onClick = {handleBtn}>Focus Me</button>
    </div>
  )
}
