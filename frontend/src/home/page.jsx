"use client";
import { useState, useEffect } from "react";
import CreateNote from "../components/CreateNote.jsx";
import NoteCard from "../components/NoteCard.jsx";
import {useAuth} from '../context/TokenContext.jsx'
import { useNavigate } from "react-router-dom";

export default function NotesPage() {
  const [notes, setNotes] = useState([]);
  const [showArchived, setShowArchived] = useState(false);
  const {token, setToken} = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async() => {
    const response = await fetch("http://localhost:5000/api/notes/fetch", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    });
    if (!response.ok) {
      throw new Error("Failed to fetch notes");
    }
    const fetched = await response.json();
    setNotes([...fetched])
  }

  const createNote = async (title, content) => {
    const newNoteSend = {
      title,
      content
    };

    try {
      const response = await fetch("http://localhost:5000/api/notes/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(newNoteSend),
    });
    const newNote = await response.json();
    setNotes([newNote, ...notes]);
    } catch (err) {
      
    }
  }

  const togglePin = (id) => {
    setNotes(
      notes.map((note) =>
        note._id === id ? { ...note, pinned: !note.pinned } : note
      )
    );
  };

  const toggleArchive = async (id) => {
    const response = await fetch(`http://localhost:5000/api/notes/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify({archived: true}),
    });
    setNotes(
      notes.map((note) =>
        note._id === id ? { ...note, archived: !note.archived } : note
      )
    );
  };

  const deleteNote = async (id) => {
    const response = await fetch(`http://localhost:5000/api/notes/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    });
    setNotes(notes.filter((note) => note._id !== id));

  };

  const logout = () => {
    navigate("/login")
    setToken(null);
  }

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

          <button style={styles.logoutBtn} onClick={logout}>Logout</button>
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
            key={note._id}
            note={note}
            onPin={() => togglePin(note._id)}
            onArchive={() => toggleArchive(note._id)}
            onDelete={() => deleteNote(note._id)}
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
    height: "60px",
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
    border: "none",
  },
  logoutBtn: {
    cursor: "pointer",
    border: "none",
    borderRadius: "10px",
    background: "#e9b303",
    fontSize: "12px",
    padding: "8px 16px",
    marginRight: "24px",
    marginLeft: "16px"
  },
  emptyMsg: {
    textAlign: "center",
    color: "#827971",
    marginTop: "40px",
  },
notesGrid: {
  columnCount: 4,
  columnGap: "20px",
  padding: "20px",
}

};
