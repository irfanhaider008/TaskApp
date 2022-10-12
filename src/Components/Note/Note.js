import React, { useEffect, useState } from 'react'
import "./Note.css"
import deleteIcon from "../../assets/delete.png";
export default function Note(props) {
  const textColor = ['red','white','yellow']
  const [colorText,setColorText] = useState(localStorage.getItem('items'))

  const [bgColor,setBGColor] = useState(null)



  const onColor = (color)=>{
setColorText(color)
console.log("COLOR$$",color)
setColorText(color)
setBGColor(color)
localStorage.setItem('items', (color));

  }
//   useEffect(()=>{
//     console.log("LOCAL",localStorage.getItem('items'))
// setColorText(localStorage.getItem('items')
// )

//   },[])
console.log("COLOR $$$",colorText)
  let monthNames=[
    "Jan","Feb","March","April","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"
  ]
  const formDate = (value)=>{

    if(!value) return""
    const date=new Date(value)
    let hrs=date.getHours()
    let amPm =hrs>12?"PM":"AM"
    hrs=hrs?hrs:"12"
    hrs=hrs>12?hrs=24-hrs:hrs

    let min = date.getMinutes()
    min =min<10?"0"+min: min;
    let day = date.getDate();
    const month =monthNames[date.getMonth()]
    return `${hrs}:${min} ${amPm} ${day} ${month}`;
  }
  let timer=500 ,timeout
  const debounce = (func) =>{
    clearTimeout(timeout);
    timeout = setTimeout(func, timer);
  };
  const updateText = (text,id)=>{
    debounce(()=>props.updateText(text,id))
  }

  return (
    <div className='note' style={{backgroundColor:props.note.color}}>
      
<textarea style={{ color: colorText }} className='note_text' defaultValue={props.note.text} onChange={(event)=>updateText(event.target.value,props.note.id)}
/>
<div className='note_footer'>

{textColor.map((item) => (
         <button onClick={()=>onColor(item)} class="button button5" style={{backgroundColor: item,}}></button>


        ))}
<p style={{ color: '#fff',fontSize:12 }}>{formDate(props.note.time)}</p>
<img style={{width:40}} src={deleteIcon} alt="Delete" onClick={()=>{
  props.deleteNote(props.note.id)
}}/>
</div>  </div>
  )
}
