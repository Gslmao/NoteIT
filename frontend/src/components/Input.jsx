export default function Input({ label, ...props }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <label style={{ display: "block", marginBottom: "6px", color: "#3A312C", fontSize:"20px" }}>
        {label}
      </label>
      <input
        {...props}
        style={{
          width: "100%",
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "6px"
        }}
      />
    </div>
  );
}
