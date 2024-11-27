import React,{useState} from 'react'

export default function TextForm(props) {


    const handleUpClick = ()=> {
        // console.log("button was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to Uppercase !","success");
    }



    const  handlerLowClick = () => {
      // console.log("lowercase was clicked");
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("converted to Lowercase !","success");
    }

    const handleOnChange = (event)=> {
        // console.log("On Change");
        setText(event.target.value);
        }


    const handlerClearClick = () => {
      let newText="";
      setText(newText);
      props.showAlert("Text is cleared !","success");
    } 
    
    
    const handlerCopyClick = () => {
       let newText = text;
        const textCopy = newText;
        navigator.clipboard.writeText(textCopy);
        props.showAlert("Text copied !","success");
    }



    const handlerRemoveSpace = () =>{
      let newText = text.split(/[  ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra spaces are removed !","success");
    }

        
    const [text, setText] = useState('');

   

    // text = "new text";  //wrong way to change the state
    // setText("new state"); // Correct way to change the change 

  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
       
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'#343a40':'white',color: props.mode==='dark'?'white':'black'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick} >Convert to uppercase</button> 

        <button className="btn btn-primary mx-1" onClick={handlerLowClick}>convert to lowercase</button>

        <button className="btn btn-primary mx-1" onClick={handlerClearClick}>Clear Text</button>

        <button className="btn btn-primary mx-1" onClick={handlerCopyClick}>Copy text</button>

        <button className="btn btn-primary mx-1" onClick={handlerRemoveSpace}>Remove Extra Spaces</button>
        
    </div>

    <div className="container my-2" style={{color: props.mode==='dark'?'white':'black'}}>

      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{text.split(" ").length * 0.008}Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the textbox to  preview it here"}</p>


    </div>

    </>
  )
}
