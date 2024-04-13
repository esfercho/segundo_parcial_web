import { useState } from "react"
import DefaultLayout from "../layout/DefaultLayout"
import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";

export default function Registro() {

    const [name, setName] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    
    const auth = useAuth();

    if(auth.isAuthenticated){
        return <Navigate to="/Productos" />
    }

    return (
        <DefaultLayout>
            <form className="form">
                <h1>Registro</h1>

                <label>Nombre</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

                <label>Usuario</label>
                <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />

                <label>Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                <label>Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                <button>Crear Usuario</button>

            </form>
        </DefaultLayout>

    )

}