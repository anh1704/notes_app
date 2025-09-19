import React from "react";
import { Viewer } from "@toast-ui/react-editor";

export default function NoteItem({ note, onDelete }) {
  return (
    <div
      style={{
        background: "white",
        borderRadius: "10px",
        padding: "1rem",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        marginBottom: "1rem",
        position: "relative",
      }}
    >
      <Viewer initialValue={note.text} />
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "8px" }}>
        <small style={{ color: "#666" }}>🕒 {note.createdAt}</small>
        <button
          onClick={() => onDelete(note.id)}
          style={{
            background: "#ff6b6b",
            border: "none",
            color: "white",
            borderRadius: "6px",
            padding: "4px 8px",
            cursor: "pointer",
          }}
        >
          ✕ Xóa
        </button>
      </div>
    </div>
  );
}
