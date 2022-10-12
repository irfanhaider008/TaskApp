import React from 'react'
import Note from '../Note/Note'
import "./NoteContainer.css"
export default function (props) {
  const reverseArray =(arr)=>{
    const array = [];
    for (let i=arr.length -1; i>=0;--i){
      array.push(arr[i]);
  }
  return array;
};
const notes = reverseArray(props.notes)
  return (
    
    <div className='note-container'>
      <h2>Add Task</h2>
      <div className='note-container_notes custom-scroll'>
{notes?.length>0 ?(
notes.map((item)=>
<Note
key={item.id}
note={item}
deleteNote ={props.deleteNote}
updateText = {props.updateText}
/>
))
:
(
  <h3>Please Add Notes</h3>

)
  
}
    </div>
    </div>
  )
}
