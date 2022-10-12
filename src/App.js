import React, { useEffect, useState } from 'react'
import NoteContainer from './Components/NoteContainer/NoteContainer'
import './App.css'
import Sidebar from './Components/Sidebar/Sidebar'
// import { Provider } from 'react-redux';
// import store from './redux/store';
// import { useSharedSelector,useSharedDispatch,actionApi } from './redux';
export default function App() {
  // const {UserList,Userlistloading} =useSharedSelector(state=>state.listAllusers)
 const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes-app')) || []);
  const addNote = (color)=>{
    const templates = [...notes];
    templates.push({
      id:Date.now() +"" +Math.floor(Math.random()*78),
      title:"",
      time:Date.now(),
      color,
    })
    setNotes(templates)
  }
  const deleteNote =(id)=>{
    const templates = [...notes]
    const index = templates.findIndex((item)=>item.id ===id);
    
if(index<0) return;
templates.splice(index,1);
setNotes(templates)

  }

  const updateText = (text,id)=>{
    const templates = [...notes]
    const index = templates.findIndex((item)=>item.id ===id);
    
if(index<0) return;
templates[index].text=text
setNotes(templates)
  }
  useEffect(()=>{
localStorage.setItem('notes-app',JSON.stringify(notes))
  },[notes])
  return (
    <div className='App'>

      <Sidebar addNote={addNote} />
      <NoteContainer notes = {notes} 
      deleteNote={deleteNote}
      updateText={updateText}
      />
    </div>
  )
}
