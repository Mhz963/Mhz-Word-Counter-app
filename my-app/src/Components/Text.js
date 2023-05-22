import React, {useState} from 'react'




export default function Text(props) {
    
const count = 0;
    const clcikOne = () =>
    {
        console.log("Link 1 clicked");
        let newText = text.toUpperCase();
        setText(newText);
        console.log(newText.length)
        props.showalert("Convreted to Uppercase","success")
        
    }

    const clcikTwo = () =>
    {
        console.log("Link 2 clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showalert("Convreted to Lowercase","success")
        
    }

    const clcikThree = () =>
    {
        console.log("Link 3 clicked");
        let newText = text.slice(0, -1); 
        setText(newText);
    }
    
    const clcikFour = () =>
    {
        console.log("Link 4 clicked");
        let newText = ""; 
        setText(newText);
    }

    const handleOnChange = (event) =>
    {   
        
        console.log("onChange handler");
        setText(event.target.value);
        console.log(text);
    }

    const [text, setText] = useState("");
    return (
        
    <>
        
            <div className="mb-3" >
                <label htmlFor="exampleFormControlInput1" className={`"form label" text-${props.mode == 'dark' || props.mode == 'green' ? 'light' : 'dark'}`}>Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className={`"form label" text-${props.mode == 'dark' || props.mode == 'green' ? 'light' : 'grey'}`}>Enter your text:</label>

                <textarea className="form-control " value = {text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="6"></textarea>
            </div>
            <div className = "button-container ">
            <button className="btn btn-primary"  role="button" onClick={clcikOne}>Upper case</button> &nbsp;
            <button className="btn btn-primary"  role="button" onClick={clcikTwo}>Lower case</button> &nbsp;
            <button className="btn btn-primary"  role="button" onClick={clcikThree}>Backspace</button> &nbsp;
            <button className="btn btn-primary"  role="button" onClick={clcikFour}>Reset</button> &nbsp;
            
            <input className="btn btn-primary" type="submit" value="Submit"/> &nbsp;
            
            </div>
            <div className='mx-3'>
            <div className={` text-${props.mode == 'dark' || props.mode == 'green'? 'light' : 'dark'}`} >
                
                <br/>
                <h3>Text summary</h3>
                <p>words: {text =="" ? text.trim().split(/\s+/).length - 1 : text.trim().split(/\s+/).length} characters: {text.length}</p>
                
                <h3>Text Preview:</h3>
                <p>{text}</p>
            </div>
            </div>
            </>
                )
}
