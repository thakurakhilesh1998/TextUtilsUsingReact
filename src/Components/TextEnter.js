import { useState } from "react";
import React from 'react';

export  default function Textwork()
{
   const [text,setText]=useState("Hi");
   const [charcter,setCharacter]=useState(0);
   const [words,setWords]=useState(0);
   const handleOnChange=(e)=>{
        setText(e.target.value);
        let length=e.target.value.length;
        setCharacter(length);
        const wordsArray =e.target.value.trim().split(/\s+/);
        setWords(wordsArray.length);
    }
    const toUpperCase=()=>
    {
        let n=text.toUpperCase();
        setText(n);
    }
    const toLowerCase=()=>
    {
        let t=text.toLowerCase();
        setText(t);
    }
    return(<>
        <div className="container-fluid">
             <label htmlFor='label' className='my-2'>Enter your text here.</label>
             <textarea className="form-control" placeholder="Leave a comment here" value={text} onChange={handleOnChange} id="floatingTextarea2" rows="4"></textarea>
             <button className='btn btn-success my-2' onClick={toUpperCase} >ConvertToUpperCase</button>
             <button className="btn btn-success  mx-2 my-2" onClick={toLowerCase}>ConvertToLowerCase</button>
         </div>
         <div className="container-fluid">
        {charcter} charcter and {words} words.
         </div>
         </>
    );
}