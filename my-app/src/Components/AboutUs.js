import React, { useState } from 'react'

export default function AboutUs() {

  const [myStyle, setStyle] = useState({
    backgroundColor: 'white',
    color: 'black',
    border: '2px solid black'
  });

  const [text, setText] = useState('Enable Dark Mode');

  const toggleState = () => {

    if (myStyle.backgroundColor == 'white') {
      setStyle({
        backgroundColor: 'black',
        color: 'white',
        border: '2px solid white'
      }
      )
    }
    if (myStyle.backgroundColor == 'black') {
      setStyle({
        backgroundColor: 'white',
        color: 'black',
        border: '2px solid black'
      }
      )
    }

    if (text == 'Enable Light Mode') {
      setText('Enable Dark Mode');
    }
    if (text == 'Enable Dark Mode') {
      setText('Enable Light Mode');
    }
  }

  return (
    <>
      <br/>
      <div className="container" style={myStyle}>
        <div className='mx-3' >
          <h2>About Us</h2>
          <div className="accordion" id="accordionPanelsStayOpenExample" >
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                  Accordion Item #1
                </button>
              </h2>
              <div id="panelsStayOpen-collapseOne" style={myStyle} className="accordion-collapse collapse show">
                <div className="accordion-body">
                  <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                  Accordion Item #2
                </button>
              </h2>
              <div id="panelsStayOpen-collapseTwo" style={myStyle} className="accordion-collapse collapse">
                <div className="accordion-body">
                  <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                  Accordion Item #3
                </button>
              </h2>
              <div id="panelsStayOpen-collapseThree" style={myStyle} className="accordion-collapse collapse">
                <div className="accordion-body">
                  <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
          </div>
          <br />
          <button className="btn btn-primary" role="button" onClick={toggleState}>{text}</button> &nbsp;
          <br/><br/>
        </div>
      </div>
    </>
  )
}
