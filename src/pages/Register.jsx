import { useState } from "react";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [dataNascimento, setDataNascimento] = useState("");
    const navigate = useNavigate();

    const handleRegister = async () => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            await addDoc(collection(db, "usuarios"), {
                uid: userCredential.user.uid,
                nome: name,
                sobrenome: sobrenome,
                dataNascimento: dataNascimento,
                email: email,
            });
            alert("Usuário cadastrado com sucesso!");
            navigate("/dashboard");
        } catch (error) {
            alert("Erro ao cadastrar: " + error.message);
        }
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h2>Cadastrar</h2>
            <input placeholder="Nome" value={name} onChange={e => setName(e.target.value)} /><br />
            <input placeholder="Sobrenome" value={sobrenome} onChange={e => setSobrenome(e.target.value)} /><br />
            <input type="date" value={dataNascimento} onChange={e => setDataNascimento(e.target.value)} /><br />
            <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} /><br />
            <input type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} /><br />
            <button onClick={handleRegister}>Cadastrar</button>
        </div>
    );
}