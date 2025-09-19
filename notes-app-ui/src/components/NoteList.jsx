import React from 'react'
import NoteItem from './NoteItem'

function NoteList({ notes, onDelete }) {
  if (notes.length === 0) {
    return <p style={{ textAlign: 'center', color: '#999' }}>No notes yet ✍️</p>
  }

  return (
    <div>
      {notes.map(note => (
        <NoteItem key={note.id} note={note} onDelete={onDelete} />
      ))}
    </div>
  )
}

export default NoteList
