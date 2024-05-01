import React, { useState } from 'react'
import toast from 'react-hot-toast';


export default function TextForm({heading, myStyle}) {
    const [text, setText] = useState("")
    
    const filetype = "txt";
    // const filetype = "pdf";
    
    
    let words = text.trim().split(/\s+/)
    let wordCount;
    if(text.split("").length === 0) {
        wordCount = 0
    } else wordCount = words.length
    

    const handleUpClick = () => {
        if (text.trim() !== "") {
        let newText = text.toUpperCase();
        setText(newText)
        toast.success("Text converted to Upper case")}
        else toast.error("Text field is empty");
    }

    const handleLoClick = () => {
        if (text.trim() !== "") {
        let newText = text.toLowerCase();
        setText(newText)
        toast.success("Text converted to Lower case")}
        else toast.error("Text field is empty");
    }

    const handleCClick = () => {
        if (text.trim() !== "") {
            let newText = text.split(' ');
            for (let i = 0; i < newText.length; i++) {
                newText[i] = newText[i][0].toUpperCase() + newText[i].substring(1);
            }

            setText(newText.join(' '))
            toast.success("Input Capitalized")}
        else toast.error("Text field is empty");
    }

    const handleCopy = () => {
        if (text.trim() !== "") {
        let newText = text;
        navigator.clipboard.writeText(newText);
        toast.success("Text Copied")}
        else toast.error("Text field is empty");
    }


    const handleRemoveExtraSpaces = () => {
        if (text.trim() !== "") {
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '));
        toast.success("Extra Spaces removed")}
        else toast.error("Text field is empty");
    }

    const handleSpeakClick = () => {
        if (text.trim() !== "") {
            if ('speechSynthesis' in window) {
                const message = new SpeechSynthesisUtterance();
                message.text = text;
                toast.success("🔊")
                message.voice = speechSynthesis.getVoices()[0];
                speechSynthesis.speak(message);
            } else {
                toast.error('SpeechSynthesis API is not supported');
            }}
        else toast.error("Text field is empty");
    }


    const downloadTextAsFile = () => {
        if (text.trim() !== "") {
        const blob = new Blob([text], { type: `text/${filetype}` });
    
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
    
        link.download = `${words[0]}.${filetype}`;
        toast.success("File downloaded")
        document.body.appendChild(link);
    
        link.click();
        document.body.removeChild(link);}
        else toast.error("Text field is empty");
      };
    

    //clear
    const handleClClick = () => {
        if (text.trim() !== "") {
        let newText = '';

        setText(newText)
        toast.success("Text cleared")}
        else toast.error("Text field is empty");
    }

    

    const handleOnChange = (event) => {
        setText(event.target.value) //this will update text to value that we have typed.... which we will later used to convert to upperCase
    }
    

    const MAX_CHARACTERS = 630; // Set the maximum number of characters
    const truncatedText = text.length > MAX_CHARACTERS ? text.slice(0, MAX_CHARACTERS) + '...' : text;

    // text will be updated with value of setText
    /* basically when we have to update value at 'text' we cant do it directly so instead we update value of setText which will update value of 'text' */
    
    return (
    <div style = {myStyle} className='p-5'>
        <div style={myStyle}>
            <h3 style={myStyle}>{heading}</h3>
            <div className="mb-3" style={myStyle}>
                <textarea className="form-control" id="myBox" cols="" rows="10" value={text} onChange={handleOnChange} placeholder='Enter text here....' style={myStyle} >{text}</textarea>
            </div>
            <div className="d-flex justify-content-between" style={myStyle}>
                <div className="d-flex gap-3">
                <button className='btn btn-primary' onClick={handleUpClick}>To Uppercase</button>
                <button className='btn btn-primary' onClick={handleLoClick}>To Lowercase</button>
                <button className='btn btn-primary' onClick={handleCClick}>Capitialize</button>
                <button className='btn btn-primary' onClick={handleCopy}>Copy</button>
                <button className='btn btn-primary' onClick={handleRemoveExtraSpaces}>Fix Space</button>
                <button className='btn btn-primary' onClick={handleSpeakClick}>🔊</button>
                <button className='btn btn-primary' onClick={downloadTextAsFile}>⬇️</button>
                </div>
                <button className='btn btn-primary' onClick={handleClClick}>Clear</button>
            </div>
        </div>
        <div className='mt-4' style={myStyle}>
            <h5>{wordCount} words and {text.split("").length} letters</h5>
            <h6>Total duration {Math.round(text.split(" ").length/183)} minutes</h6>
            <h3 className='pt-2'>Preview</h3>
            
            <p>{text.length>0?truncatedText:"Please enter some text"}</p>
        </div>
    </div>
  )
}
