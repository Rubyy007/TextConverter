import { useState } from 'react';




const TextArea = () =>{
    
const [Text,setText] = useState("")

const UpperCase =()=>{
    console.log("UPPERCASE WAS CLICKED" + Text);
    let m = Text.toUpperCase()
    setText(m)
   
}
const LowerCase =()=>{
    console.log("UPPERCASE WAS CLICKED" + Text);
    let m = Text.toLowerCase()
    setText(m)
   
}
 const ClearText=()=>{
    console.log("text is cleared");
    setText("")
 }
    
    const TypingText =(e)=>{
      setText(e.target.value)
        console.log("onchange clicked");
    } 
  
    return(
        <div className='container'>
          
              <Form>
      
      <Form.Group className="mb-3" id="Textarea" controlId="exampleForm.ControlTextarea1">
        <Form.Label className='label'>Enter The Text :</Form.Label>
        <Form.Control id='Area' onChange={TypingText} value={Text} as="textarea" rows={3} />
      </Form.Group>
    </Form>
    <div className='container btn-group'>
        <button className='btn btn-primary' onClick={UpperCase} >Uppercase</button>
        <button className='btn btn-info' onClick={LowerCase}>Lowercase</button>
        <button className='btn btn-danger ' onClick={ClearText}>Clear</button>

    </div>
   
        </div>


    )


}
export default TextArea;