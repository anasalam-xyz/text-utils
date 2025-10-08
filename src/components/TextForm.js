
import {useState} from 'react'

export default function TextForm(props) {
    const handleClearClick = ()=>{
        setText("");
        props.showAlert("success", "Text area has been cleared.");
    }
    const handleUpClick = ()=>{
        setText(text.toUpperCase());
        props.showAlert("success", "Text converted to Upper Case.");
    }
    const handleLoClick = ()=>{
        setText(text.toLowerCase());
        props.showAlert("success", "Text converted to Lower Case");
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const [text, setText] = useState("");
    const darkBG = "#042743";
    document.body.style.backgroundColor = props.mode==="light"?"white":darkBG;
    return (
        <>
            <div style={{backgroundColor: props.mode==="light"?"white":darkBG, color: props.mode==="light"?"black":"white"}}>
                <h1 className='mt-3'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea style={{backgroundColor: props.mode==="light"?"white":"grey", color: props.mode==="light"?"black":"white"}} rows="8" id="myBox" value = {text} onChange = {handleOnChange} className="form-control"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick = {handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick = {handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick = {handleClearClick}>Clear</button>
            </div>
            <div className="container" style={{backgroundColor: props.mode==="light"?"white":darkBG, color: props.mode==="light"?"black":"white"}} >
                <h2>Your text summary: </h2>
                <p>{text.split(" ").filter(word=>/[a-zA-Z0-9]+/.test(word)).length} words and {text.length} characters</p>
                <p>{0.008*text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text || "Enter something in the textbox above to preview it here..."}</p>
            </div>
        </>
    )
}
