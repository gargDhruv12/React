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
              backgroundColor : props.mode==="dark" ? "#276c85" : "white",
              color : props.mode==="dark" ? "white" : "#0c1f31"
            }}></textarea>
        </div>
        <button className='btn btn-primary mx-1 my-1' disabled={text.length === 0}  onClick={handleUpClick}>Convert to uppercase</button>
        <button className='btn btn-primary mx-1 my-1' disabled={text.length === 0}  onClick={handleLoClick}>Convert to lowercase</button>
        
    </div>
    <div className='container my-3' style={{color : props.mode==="dark" ? "white" : "#0c1f31" }}>
        <h2>Text Summary</h2>
        <p>total {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words , {text.length} characters</p>
        <p>Readable in {0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} minutes </p>
    </div>
    </>
  )
}
