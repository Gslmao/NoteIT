"use client";
import { useState } from "react";
import CreateNote from "../components/CreateNote.jsx";
import NoteCard from "../components/NoteCard.jsx";

export default function NotesPage() {
  const [notes, setNotes] = useState([]);
  const [showArchived, setShowArchived] = useState(false);

  const createNote = (title, content) => {
    const newNote = {
      id: Date.now(),
      title,
      content,
      pinned: false,
      archived: false,
    };

    setNotes([newNote, ...notes]);
  };

  const togglePin = (id) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, pinned: !note.pinned } : note
      )
    );
  };

  const toggleArchive = (id) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, archived: !note.archived } : note
      )
    );
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const filteredNotes = notes.filter(
    (note) => note.archived === showArchived
  );

  return (
    <div style={styles.page}>
      
      {/* Header */}
      <div style={styles.header}>
        <h2 style={styles.title}>Notes</h2>

        <div style={{ display: "flex", gap: "20px" }}>
          <button
            style={{
              ...styles.toggleBtn,
            
            }}
            onClick={() => setShowArchived(!showArchived)}
          >
            {showArchived ? "Show Active" : "Show Archived"}
          </button>

          <button style={styles.logoutBtn}>Logout</button>
        </div>
      </div>

      {/* Create Note */}
      <CreateNote onCreate={createNote} />

      {/* Message */}
      {filteredNotes.length === 0 && (
        <p style={styles.emptyMsg}>No notes yet. Create your first note!</p>
      )}

      {/* Notes */}
      <div style={styles.notesGrid}>
        {filteredNotes.map((note) => (
          <NoteCard
            key={note.id}
            note={note}
            onPin={() => togglePin(note.id)}
            onArchive={() => toggleArchive(note.id)}
            onDelete={() => deleteNote(note.id)}
          />
        ))}
      </div>
    </div>
  );
}

const styles = {
page: {
  padding: "0px",
  background: "#F7F6F3",
  minHeight: "100vh",
  boxSizing: "border-box", // prevents overflow
},
  header: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "30px",
    alignItems: "center",
    borderBottom: "1px solid #ddd",
    paddingBottom: "1px",
  },
  title: {
    fontSize: "30px",
    fontWeight: "600",
    color:"#414141ff",
    paddingLeft: "20px",
  },
  toggleBtn: {
    padding: "8px 16px",
    borderRadius: "10px",
    background: "#e9b303",
    cursor: "pointer",
  },
  logoutBtn: {
    cursor: "pointer",
    border: "none",
    borderRadius: "10px",
    background: "#e9b303",
    fontSize: "15px",
    padding: "8px 16px"
  },
  emptyMsg: {
    textAlign: "center",
    color: "#827971",
    marginTop: "40px",
  },
  notesGrid: {
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
};
