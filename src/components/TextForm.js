import React, { useState } from 'react'


export default function TextForm(props) {
    const [text, setText] = useState("")
    
    //wordCount
    
    
    let words = text.split(/[ ]+/)
    let wordCount = words.length;
    if( words[wordCount-1] == '' ) wordCount -= 1;

    const handleUpClick = () => {
        if (text.trim() !== "") {
        // console.log("Convert to Uppercase was clicked: " + text)
        let newText = text.toUpperCase();
        setText(newText)
        // setText("You have clicked on handleUpClick")
        props.showAlert("Text converted to Upper case", "success")}
        else props.showAlert("Text field is empty", "error");
    }

    const handleLoClick = () => {
        if (text.trim() !== "") {
        // console.log("Convert to Uppercase was clicked: " + text)
        let newText = text.toLowerCase();
        setText(newText)
        // setText("You have clicked on handleUpClick")
        props.showAlert("Text converted to Lower case", "success")}
        else props.showAlert("Text field is empty", "error");
    }

    const handleCClick = () => {
        if (text.trim() !== "") {
        // console.log("Convert to Uppercase was clicked: " + text)
        let newText = text.split(' ');
        for (let i = 0; i < newText.length; i++) {
            newText[i] = newText[i][0].toUpperCase() + newText[i].substring(1);
        }

        setText(newText.join(' '))
        // setText("You have clicked on handleUpClick")
        props.showAlert("Input Capitalized", "success")}
        else props.showAlert("Text field is empty", "error");
    }

    const handleCopy = () => {
        if (text.trim() !== "") {
        let newText = text;
        navigator.clipboard.writeText(newText);
        props.showAlert("Text Copied", "success")}
        else props.showAlert("Text field is empty", "error");
    }


    const handleRemoveExtraSpaces = () => {
        if (text.trim() !== "") {
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '));
        props.showAlert("Extra Spaces removed", "success")}
        else props.showAlert("Text field is empty", "error");
    }

    //clear
    const handleClClick = () => {
        if (text.trim() !== "") {
        // console.log("Convert to Uppercase was clicked: " + text)
        let newText = '';

        setText(newText)
        // setText("You have clicked on handleUpClick")
        props.showAlert("Text cleared", "success")}
        else props.showAlert("Text field is empty", "error");
    }

    

    const handleOnChange = (event) => {
        // console.log("text updated")
        setText(event.target.value) //this will update text to value that we have typed.... which we will later used to convert to upperCase
    }
    

    const MAX_CHARACTERS = 630; // Set the maximum number of characters
    const truncatedText = text.length > MAX_CHARACTERS ? text.slice(0, MAX_CHARACTERS) + '...' : text;

    // text will be updated with value of setText
    /* basically when we have to update value at 'text' we cant do it directly so instead we update value of setText which will update value of 'text' */
    
    return (
    <div style={props.myStyle1} className='p-5'>
        <div style={props.myStyle1}>
            <h3 style={props.myStyle1}>{props.heading}</h3>
            <div className="mb-3" style={props.myStyle1}>
                <textarea className="form-control" id="myBox" cols="" rows="10" value={text} onChange={handleOnChange} placeholder='Enter text here....' style={props.myStyle1} >{text}</textarea>
            </div>
            <div className="d-flex justify-content-between" style={props.myStyle1}>
                <div className="d-flex gap-3">
                <button className='btn btn-primary' onClick={handleUpClick}>To Uppercase</button>
                <button className='btn btn-primary' onClick={handleLoClick}>To Lowercase</button>
                <button className='btn btn-primary' onClick={handleCClick}>Capitialize</button>
                <button className='btn btn-primary' onClick={handleCopy}>Copy</button>
                <button className='btn btn-primary' onClick={handleRemoveExtraSpaces}>Fix Space</button>
                </div>
                <button className='btn btn-primary' onClick={handleClClick}>Clear</button>
            </div>
        </div>
        <div className='mt-4' style={props.myStyle1}>
            <h5>{wordCount} words and {text.split("").length} letters</h5>
            <h6>Total duration {Math.round(text.split(" ").length/183)} minutes</h6>
            <h3 className='pt-2'>Preview</h3>
            
            <p>{text.length>0?truncatedText:"Please enter some text"}</p>
        </div>
    </div>
  )
}
