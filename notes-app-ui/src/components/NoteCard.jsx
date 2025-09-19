import React from "react";
import ReactMarkdown from "react-markdown";

export default function NoteCard({ note, onDelete }) {
  return (
    <div className="note-card">
      <div className="note-content">
        <ReactMarkdown>{note.text}</ReactMarkdown>
      </div>
      <div className="note-footer">
        <small>{note.date}</small>
        <button onClick={() => onDelete(note.id)}>🗑</button>
      </div>
    </div>
  );
}
