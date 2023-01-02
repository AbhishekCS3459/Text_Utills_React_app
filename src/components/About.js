import React, { useState } from 'react'
export default function About(props) {
const [current_name,set_newName] = useState('DARK MODE')
const [mystyle, setStyle] = useState({
    color: 'black',
    backgroundColor: 'white',
    // border : 'solid black'
})
const [mystyle2, setStyle2] = useState({
    color: 'white',
    backgroundColor: 'black',
    // border : 'solid black'
})

let enabledark = () => {
    if( mystyle.color==='white' ){
        let btn_altered = {
    color: 'white',
    backgroundColor: 'black',
        }

        let altered_color = 'DARK MODE'
    let altered_style = {
        color: 'black',
    backgroundColor: 'white',
    }
setStyle(altered_style)
setStyle2(btn_altered)
set_newName(altered_color)
    }

    else{
        let btn_altered = {
            color: 'black',
            backgroundColor: 'white',
                }
            
        let altered_color = 'LIGHT MODE'
        let altered_style = {
            color: 'white',
        backgroundColor: 'black',
        }
    setStyle(altered_style)
    setStyle2(btn_altered)
    set_newName(altered_color)
    }
}

return (
    <>
    <div className="container " style={mystyle}>
        <h1>About</h1>
        <div className="accordion accordion-flush " id="accordionFlushExample">
        <div className="accordion-item" style={mystyle}>
            <h2 className="accordion-header" id="flush-headingOne">
            <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
                style={mystyle}
            >
                Accordion Item #1
            </button>
            </h2>
            <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
            >
            <div className="accordion-body" style={mystyle}>
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> className. This is
                the firt item's accordion body.
            </div>
            </div>
        </div>
        <div className="accordion-item" style={mystyle}>
            <h2 className="accordion-header" id="flush-headingTwo">
            <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
                style={mystyle}
            >
                Accordion Item #2
            </button>
            </h2>
            <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
            >
            <div className="accordion-body" style={mystyle}>
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> className. This is
                the second item's accordion body. Let's imagine this being
                filled with some actual content.
            </div>
            </div>
        </div>
        <div className="accordion-item " style={mystyle}>
            <h2 className="accordion-header" id="flush-headingThree">
            <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
                style={mystyle}
            >
                Accordion Item #3
            </button>
            </h2>
            <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
            >
            <div className="accordion-body" style={mystyle}>
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> className. This is
                the third item's accordion body. Nothing more exciting happening
                here in terms of content, but just filling up the space to make
                it look, at least at first glance, a bit more representative of
                how this would look in a real-world application.
            </div>
            </div>
        </div>
        </div>
        <button
        type="button"
        onClick={enabledark}
        className="f btn btn-dark my-3"
        style={mystyle2}
        >
        {current_name}
        </button>
    </div>
    </>
)
}
