import React from 'react';
import { useState  } from 'react';

export default function About()
{
    const [btnText,setbtnText]=useState("Enable Dark Mode");
    const [mySytle,setStyle]=useState(
        {
            color:'black',
            backgroundColor:"white"
        }
    );
    const changeMode=()=>
    {
        if(mySytle.color==='black')
        {
        setStyle({
            color:'white',
            backgroundColor:'black'
        });
        setbtnText("Enable Light Mode")
    }
    else{
        setStyle({
            color:'black',
            backgroundColor:'white'
        });
        setbtnText("Enable Dark Mode")
    }
    }
    return(
        <div className='container'>
        <div className='container my-2' style={mySytle}>
            <h3 style={mySytle}>About Us</h3>
            <p className='text-centre py-2' style={mySytle}>Of course! Here's a slightly longer random text:
            "In a distant galaxy, where stars twinkled like diamonds against the velvet expanse of space, 
            a brave explorer named Aria embarked on a journey of discovery. Equipped with a trusty spaceship 
            and a heart full of curiosity, she ventured into uncharted realms, where nebulous clouds danced
             with vibrant hues and planets revealed their secrets one by one. Along the way, Aria encountered 
             sentient beings of all shapes and sizes, each with their own tales to tell. From the crystalline 
             city of Lumina to the ancient forests of Zephyr, her adventures knew no bounds. With every 
             planet she touched down upon, Aria left a trace of her essence, a reminder that the universe 
             is both vast and intimately interconnected. And as her journey continued, she learned that the
              true treasures of the cosmos were not material riches, but the bonds she forged and the stories
               she collected."</p>
        </div>
        <button className='btn btn-primary' onClick={changeMode}>{btnText}</button>
        </div>
    );
}