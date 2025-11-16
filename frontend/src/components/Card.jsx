export default function Card({ children }) {
  return (
    <div style={{
      background: "#FFFFFF",
      padding: "40px",
      borderRadius: "12px",
      boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      width: "400px",
      outline: "2px solid black"
    }}>
      {children}
    </div>
  );
}
