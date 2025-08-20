import React from 'react'

export default function About(props) {

  const colors = {
      light: ['black', 'white'],
      dark: ['white', 'rgb(57, 63, 73)']
  };

  const [textColor, bgColor] = colors[props.mode] || ['black', 'white'];

  const myStyle = {
      color: textColor,
      backgroundColor: bgColor
  };
  
  return (
    <div className='container' style={myStyle}>
        <h1 className='my-2'>About Us</h1>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" style={myStyle}>
      <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>Analyze your text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        TextUtils gives you a way to analyze ypur text quickly and effectively, be it word count or character count
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed " style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>Free to use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        TextUtils is a free character control tool that provides instant character count and word count statistics for a given text. This is suitable for writing text with word/character limit.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong>Browser compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        This word counter software works in any browser such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in blogs, books, Excel documents, pdf documents, essays etc.
      </div>
    </div>
  </div>
</div>
    
    </div>
  )
}
