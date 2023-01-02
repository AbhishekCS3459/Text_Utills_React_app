import React, { useState } from 'react'

export default function Textform(props) {
  // setText("Abhishek");
  const [text, setText] = useState('Enter text here')

  const handleUpClick = () => {
    let new_text = text.toUpperCase();
    setText(new_text)
    props.showAlert(" The Text has been Converted to Upper Case ", "success")
  }
  const handleOnChange = (event) => {
    setText(event.target.value)
  }
  const handleCopy = ()=>{
  let text = document.getElementById("exampleFormControlTextarea1");
  text.select();
  text.setSelectionRange(0,9999);
  navigator.clipboard.writeText(text.value);
  props.showAlert("Copied to Clipboard!","success")
  }
  const handlelowClick= ()=>{
    let new_text = text.toLowerCase();
    setText(new_text)
    props.showAlert("  Converted to lower Case","success")
  }
  return (
    <>
    <div className="container" >

  
      <h1 className={`text-${props.mode}`} >{props.heading} </h1>

      <div className="mb-3  ">
        <textarea
          value={text}
          
          onChange={handleOnChange}
          className={`form-control bg-${props.mode2} text-${props.mode} `}
          id="exampleFormControlTextarea1"
          rows="8"
        ></textarea>


        <button
          type="button"
          onClick={handleUpClick}
          className="btn btn-info btn-lg my-2 "
        >
          Convert to Upper Case
        </button>
        <button
          type="button"
          onClick={handlelowClick}
          className="btn btn-warning btn-lg my-2 mx-2"
        >
          Convert to Lower Case
        </button>
        <button
          type="button"
          onClick={handleCopy}
          className="btn btn-danger btn-lg my-2 mx-2"
        >
          Copy to Clipboard
        </button>
      </div>
      </div>
      <div className="container">
       {/* <h5><i>Your Text Summary here</i> </h5> */}
       <div className="card" style={{width: "18rem"}}>

  <div className={`card-body bg-${props.mode2} text-${props.mode}`}>
    <h5 className="card-title">Text Summary</h5>

    <ul>
      <li>word total count {text.length} </li>
      <li>word count {text.split(" ").length-1} </li>
      <li>Average time to read  {(text.split(" ").length-1) * .008} min</li>
    </ul>
    
    
   
  </div>
</div>
      </div>
    </>
  )
}
