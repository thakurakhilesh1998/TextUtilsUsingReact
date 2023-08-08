import { useState } from "react";
import React from 'react';

export  default function Textwork()
{
   const [text,setText]=useState("Hi");
   const handleOnChange=(e)=>{
        setText(e.target.value);
    }
    const toUpperCase=()=>
    {
        let n=text.toUpperCase();
        setText(n);
    }
    return(<>
        <label htmlFor='label' className='my-2'>Enter your text here.</label>
         <textarea className="form-control" placeholder="Leave a comment here" value={text} onChange={handleOnChange} id="floatingTextarea2" rows="4"></textarea>
         <button className='btn btn-success my-2' onClick={toUpperCase} >ConvertToUpperCase</button>
         </>
    );
}