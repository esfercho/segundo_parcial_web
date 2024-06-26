import { useState } from "react"
import DefaultLayout from "../layout/DefaultLayout"
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";
import { API_URL } from "../auth/constants";

export default function Registro() {

    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [errorResponse, setErrorResponse] = useState("");

    const auth = useAuth();
    const goTo = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
    
        try {
            const response = await fetch(`${API_URL}/signup`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    username,
                    password,
                    email,
                }),
            });
    
            if (response.ok) {
                console.log("Usuario creado exitosamente!");
                setErrorResponse("");
                goTo("/")
            } else {
                console.log("Algo salió mal. Código de estado HTTP:", response.status);
                const json = await response.json();
                setErrorResponse(json.body.error);
            }
        } catch (error) {
            console.error("Error al realizar la solicitud:", error);
        }
    }

    if (auth.isAuthenticated) {
        return <Navigate to="/Productos" />
    }

    return (
        <DefaultLayout>
            <form className="form" onSubmit={handleSubmit}>
                <h1>Registro</h1>
                {errorResponse && <div className="errorMessage">{errorResponse}</div>}
                <label>Nombre</label>
                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />

                <label>Usuario</label>
                <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />

                <label>Password</label>
                <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                <label>Email</label>
                <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                <button>Crear Usuario</button>

            </form>
        </DefaultLayout>

    )

}