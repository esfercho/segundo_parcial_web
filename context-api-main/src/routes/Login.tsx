import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";
import DefaultLayout from "../layout/DefaultLayout"
import React, { useState } from "react"
import { API_URL } from "../auth/constants";
import { AuthResponse, AuthResponseError } from "../types/types";

export default function Login() {

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [errorResponse, setErrorResponse] = useState("");
    const auth = useAuth();
    const goTo = useNavigate();

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            const response = await fetch(`${API_URL}/Login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username,
                    password,
                }),
            });
    
            if (response.ok) {
                console.log("Usuario autenticado!");
                setErrorResponse("");
                
                const json = (await response.json()) as AuthResponse;

                auth.saveUser(json);
                goTo("/Productos");

                if(json.body.accessToken && json.body.refreshToken){
                    //No me dio para hacer la autenticacion con tokens en el front end :c

                    auth.saveUser(json);
                    goTo("/Productos");
                }
            } else {
                console.log("Algo salió mal. Código de estado HTTP:", response.status);
                const json = await response.json();
                setErrorResponse(json.body.error);
            }
        } catch (error) {
            console.error("Error al realizar la solicitud:", error);
        }
    }

    if(auth.isAuthenticated){
        return <Navigate to="/Productos" />
    }
    return (
        <DefaultLayout>
            <form className="form" onSubmit={handleSubmit}>
                <h1>Login</h1>
                {errorResponse && <div className="errorMessage">{errorResponse}</div>}
                <label>Usuario</label>
                <input type="text" value={username} onChange ={(e) => setUserName(e.target.value)}/>

                <label>Password</label>
                <input type="password" value={password} onChange ={(e) => setPassword(e.target.value)}/>

                <button>Login</button>

            </form>
        </DefaultLayout>

    )

}