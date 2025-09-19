import React, { useState } from 'react'
import NoteEditor from './components/NoteEditor'
import NoteList from './components/NoteList'
import '@toast-ui/editor/dist/toastui-editor.css';


function App() {
  const [notes, setNotes] = useState([])

  const addNote = (text) => {
    const newNote = {
      id: Date.now(),
      text,
      createdAt: new Date().toLocaleString(),
    }
    setNotes([newNote, ...notes])
  }

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id))
  }

  return (
    <div style={{
      maxWidth: '700px',
      margin: '40px auto',
      padding: '20px',
      background: 'rgba(255,255,255,0.95)',
      borderRadius: '16px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <h1 style={{ textAlign: 'center', color: '#4a4e69', marginBottom: '20px' }}>
        ✨ My Unique Notes
      </h1>
      <NoteEditor onAdd={addNote} />
      <NoteList notes={notes} onDelete={deleteNote} />
    </div>
  )
}

export default App
