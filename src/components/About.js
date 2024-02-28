import React, { useEffect, useState } from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color: "white",
    //     backgroundColor: "black"
    // });

    // useEffect(() => {
    //     if (props.mode === 'light') {
    //         setMyStyle({
    //             color: "black",
    //             backgroundColor: 'white'
    //         });
    //     } else {
    //         setMyStyle({
    //             color: "white",
    //             backgroundColor: 'black'
    //         });
    //     }
    // }, [props.mode]); // Update myStyle whenever props.mode changes

  return (
    <div className="accordion" id="accordionExample" style={props.myStyle}>
        <div className="accordion-item" style={props.myStyle}>
            <h2 className="accordion-header" id="headingOne" style={props.myStyle}>
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={props.myStyle}>
                Accordion Item #1
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style={props.myStyle}>
            <div className="accordion-body" style={props.myStyle}>
                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        <div className="accordion-item" style={props.myStyle}>
            <h2 className="accordion-header" id="headingTwo" style={props.myStyle}>
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={props.myStyle}>
                Accordion Item #2
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample" style={props.myStyle}>
            <div className="accordion-body" style={props.myStyle}>
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        <div className="accordion-item" style={props.myStyle}>
            <h2 className="accordion-header" id="headingThree" style={props.myStyle}>
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={props.myStyle}>
                Accordion Item #3
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample" style={props.myStyle}>
            <div className="accordion-body" style={props.myStyle}>
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        {/* <div className='m-3' style={props.myStyle}>
        <button className={`btn btn-${mode}`} onClick={toggle}>{modeText}</button>
        </div> */}
    </div>
  )
}
