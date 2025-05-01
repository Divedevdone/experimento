// src/pages/Dashboard.jsx
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import '../index.css';

export default function Dashboard() {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        const fetchUsuarios = async () => {
            const querySnapshot = await getDocs(collection(db, "usuarios"));
            const data = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setUsuarios(data);
        };

        fetchUsuarios();
    }, []);

    return (
        <div className="dashboard-container">
            <h2>Usuários Cadastrados</h2>
            <ul className="user-list">
                {usuarios.map(user => (
                    <li key={user.id} className="user-card">
                        <span className="user-name">{user.nome} {user.sobrenome}</span><br />
                        <span className="user-email">{user.email}</span><br />
                        <span className="user-dob">Nascimento: {user.dataNascimento}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
