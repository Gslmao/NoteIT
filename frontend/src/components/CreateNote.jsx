"use client";

import { useState } from "react";

export default function CreateNote({ onCreate }) {
  const [expanded, setExpanded] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const reset = () => {
    setTitle("");
    setContent("");
    setExpanded(false);
  };

  const handleClose = () => {
    if (title.trim() !== "" || content.trim() !== "") {
      onCreate(title, content);
    }
    reset();
  };

  return (
    <div style={styles.wrapper}>
      {!expanded ? (
        <input
          placeholder="Take a note..."
          style={styles.collapsed}
          onClick={() => setExpanded(true)}
        />
      ) : (
        <div style={styles.expandedBox}>
          <input
            placeholder="Title"
            style={styles.titleInput}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div/>

          <textarea
            placeholder="Take a note..."
            style={styles.textArea}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />

          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <button style={styles.closeBtn} onClick={handleClose}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "30px",
  },
  collapsed: {
    width: "600px",
    padding: "15px",
    borderRadius: "10px",
    border: "1px solid #ddd",
  },
  expandedBox: {
    width: "600px",
    padding: "15px",
    borderRadius: "10px",
    border: "1px solid #ddd",
    background: "#fff",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  titleInput: {
    width: "100%",
    padding: "10px",
    border: "none",
    outline: "none",
    background:"#F7F6F3"
  },
  textArea: {
    width: "100%",
    padding: "10px",
    height: "100px",
    border: "none",
    outline: "none",
    resize: "none",
    background:"#F7F6F3"
  },
  closeBtn: {
    background: "#e9b303",
    border: "none",
    padding: "8px 16px",
    borderRadius: "8px",
    cursor: "pointer",
  },
};
