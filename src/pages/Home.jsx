// src/pages/Home.jsx
import { useNavigate } from "react-router-dom";


export default function Home() {
    const navigate = useNavigate();

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Bem-vindo</h1>
            <button onClick={() => navigate("/register")}>Cadastrar</button>
            <button onClick={() => navigate("/login")}>Login</button>
        </div>
    );
}
