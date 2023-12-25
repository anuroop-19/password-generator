import './passgen.css';
import { useState } from 'react';
import { useEffect } from 'react';
const Passgen = () => {
    const [password,setpassword]=useState("");
    const [lengthh,setlengthh]=useState(6);
    const [isnum,setnum]=useState(false);
    const [ischar,setchar]=useState(false);
    const pass_gen=()=>{
        let pass="abcdeghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
        if(isnum)
        {
            pass+="123456789"
        }
        if(ischar)
        {
            pass+="!@#$%^&*()_-+={}[]"
        }
        let pass1=""
        console.log(isnum);
        for(let i=0;i<lengthh;i++)
        {
            const randomDecimal = Math.random();
            const randomNumber = Math.floor(randomDecimal * pass.length)  ;
            pass1+=pass[randomNumber];
        }
        setpassword(pass1);
    }
    useEffect(()=>{
        pass_gen();
    },[lengthh,isnum,ischar])
    return (
        <div className="container">
    <h1>PASSWORD GENERATOR</h1>
    
    
    <div className="form-group">
        <label for="stringDisplay">Password (6-30 characters):</label>
        <div className="text-display" id="stringDisplay">{password}</div>
    </div>

   
    <div className="form-group">
        <label for="lengthInput">Length:</label>
        <input type="range" id="lengthInput" name="lengthInput" min="6" max="30" className="length" value={lengthh}  onChange={(e)=>{setlengthh(e.target.value)}}required/>
        <span id="lengthLabel">Value: {lengthh}</span>
    </div>

    
    <div className="form-group">
        <input type="checkbox" id="numberCheckbox" name="numberCheckbox" className="number" onChange={() => {
        setnum((prev) => !prev);
      }}/>
        <label for="numberCheckbox">Include Numbers</label>
    </div>

    
    <div className="form-group">
        <input type="checkbox" id="specialCharCheckbox" name="specialCharCheckbox" className="special_character" onChange={() => {
        setchar((prev) => !prev);
      }}/>
        <label for="specialCharCheckbox">Include Special Characters</label>
    </div>

</div>

      );
}
 
export default Passgen;