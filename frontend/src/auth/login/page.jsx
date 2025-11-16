import Card from "../../components/Card.jsx";
import LoginForm from "./LoginForm.jsx";

export default function LoginPage() {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      width: "100vw",
      background: "#F7F6F3"
    }}>
      <Card>
        <LoginForm />
      </Card>
    </div>
  );
}
