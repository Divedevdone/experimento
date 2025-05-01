// src/pages/Register.jsx
import { useState } from "react";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const navigate = useNavigate();

    const handleRegister = async () => {
        try {
            // Cria o usuário no Firebase Authentication
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);

            // Salva os dados no Firestore
            await addDoc(collection(db, "usuarios"), {
                uid: userCredential.user.uid,
                nome: name,
                sobrenome: lastName,
                email: email,
                dataNascimento: birthDate,
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
            <input
                placeholder="Nome"
                value={name}
                onChange={e => setName(e.target.value)}
            /><br />
            <input
                placeholder="Sobrenome"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
            /><br />
            <input
                type="date"
                placeholder="Data de Nascimento"
                value={birthDate}
                onChange={e => setBirthDate(e.target.value)}
            /><br />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
            /><br />
            <input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={e => setPassword(e.target.value)}
            /><br />
            <button onClick={handleRegister}>Cadastrar</button>
        </div>
    );
}
