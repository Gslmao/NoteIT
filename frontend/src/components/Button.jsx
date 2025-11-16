export default function Button({ children, ...props }) {
  return (
    <button
      {...props}
      style={{
        background: "#e9b303",
        padding: "10px 20px",
        borderRadius: "6px",
        border: "1px solid #000",
        cursor: "pointer",
        fontWeight: "600"
      }}>
      {children}
    </button>
  );
}
