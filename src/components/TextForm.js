import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("UpperCase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper case","success");
    }
    const handleLowClick = () => {
        // console.log("UpperCase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower case","success");
    }
    const handleClearClick = () => {
        // console.log("UpperCase was clicked" + text);
        let newText = "";
        setText(newText);
        props.showAlert("Text cleared","success");
    }
    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    }
    const handleCopy = () => {
        var text = document.getElementById("MyBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Text Copied to clipboard","success");
    }
    const handleExtraSpaces = () => {
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.showAlert("Extra spaces removed","success");
    }
    const countWords = (text) => {
    if (!text) return 0; // null/undefined/empty ke case me 0

    // Split the string by spaces and filter out empty strings
    const noOfWords = text.trim().split(/\s+/); // handles multiple spaces too
    return noOfWords.length;
    };
    const colors = {
        light: ['black', 'white'],
        dark: ['white', 'rgb(57, 63, 73)']
    };

    const [textColor, bgColor] = colors[props.mode] || ['black', 'white'];

    const myStyle = {
        color: textColor,
        backgroundColor: bgColor
    };

    const [text, setText] = useState('');
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <div className="mb-3">
                <h1>{props.heading} </h1>
                <textarea className="form-control" value = {text} onChange={handleOnChange} style={myStyle} id="MyBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" style={{border:`2px solid ${props.mode==='dark'?'white':'black'}`}} onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" style={{border:`2px solid ${props.mode==='dark'?'white':'black'}`}} onClick={handleLowClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" style={{border:`2px solid ${props.mode==='dark'?'white':'black'}`}} onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" style={{border:`2px solid ${props.mode==='dark'?'white':'black'}`}} onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" style={{border:`2px solid ${props.mode==='dark'?'white':'black'}`}} onClick={handleExtraSpaces}>Handle Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>Your text summary</h1>
            <p>{countWords(text)} words and {text.length} characters</p>
            <p>{0.008 * countWords(text)} Minutes</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Nothing to preview"}</p>
        </div>
        </>
    )
}
