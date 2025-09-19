import React, { useRef } from "react";
import { Editor } from "@toast-ui/react-editor";

export default function NoteEditor({ onAdd }) {
  const editorRef = useRef();

  const handleSave = () => {
    const markdown = editorRef.current.getInstance().getMarkdown();
    if (!markdown.trim()) return;
    onAdd(markdown);
    editorRef.current.getInstance().setMarkdown("");
  };

  return (
    <div className="editor">
      <Editor
        ref={editorRef}
        height="200px"
        initialEditType="markdown"
        previewStyle="tab"
        placeholder="✍️ Viết ghi chú ở đây..."
        usageStatistics={false}
      />
      <div style={{ marginTop: "10px" }}>
        <button onClick={handleSave}>💾 Lưu Ghi Chú</button>
      </div>
    </div>
  );
}
