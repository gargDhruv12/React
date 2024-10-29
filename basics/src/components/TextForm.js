import React, {useState} from 'react'

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");
   const handleUpClick = ()=>{
    // console.log("Uppercase was clicked " + text);
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to uppercase","success");
   }
   const handleLoClick = ()=>{
    // console.log("lowercase was clicked " + text);
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to lowercase","success");
   }
   const handleOnchange= (event)=>{
    // console.log("On change");
    setText(event.target.value);
   }
  return (
    <>
    <div className='container' style={{color : props.mode==="dark" ? "white" : "#0c1f31" }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnchange} id="mybox" rows="5" style={{
              backgroundColor : props.mode==="dark" ? "grey" : "white",
              color : props.mode==="dark" ? "white" : "#0c1f31"
            }}></textarea>
        </div>
        <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to uppercase</button>
        <button className='btn btn-primary mx-1' onClick={handleLoClick}>Convert to lowercase</button>
        
    </div>
    <div className='container my-3' style={{color : props.mode==="dark" ? "white" : "#0c1f31" }}>
        <h2>Text Summary</h2>
        <p>total {text.split(" ").length} words , {text.length} characters</p>
        <p>Readable in {0.008 * text.split(" ").length} minutes </p>
    </div>
    </>
  )
}
