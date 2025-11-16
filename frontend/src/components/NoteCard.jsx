"use client";

export default function NoteCard({ note, onPin, onArchive, onDelete }) {
  return (
    <div style={styles.card}>
      <h3 style={styles.title}>{note.title}</h3>
      <p style={styles.content}>{note.content}</p>

      <div style={styles.actions}>
        <button onClick={onPin}>📌</button>
        <button onClick={onArchive}>📦</button>
        <button onClick={onDelete} style={{ color: "red" }}>🗑️</button>
      </div>
    </div>
  );
}

const styles = {
  card: {
    background: "#fff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
    width: "500px",
    transition: "0.2s",
  },
  title: {
    margin: "0 0 8px 0",
    fontWeight: "600",
  },
  content: {
    margin: 0,
    color: "#56534f",
  },
  actions: {
    display: "flex",
    gap: "15px",
    marginTop: "15px",
  },
};
