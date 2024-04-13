import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";
import DefaultLayout from "../layout/DefaultLayout"
import { useState } from "react"

export default function Login() {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const auth = useAuth();

    if(auth.isAuthenticated){
        return <Navigate to="/Productos" />
    }
    return (
        <DefaultLayout>
            <form className="form">
                <h1>Login</h1>
                <label>Usuario</label>
                <input type="text" value={userName} onChange ={(e) => setUserName(e.target.value)}/>

                <label>Password</label>
                <input type="password" value={password} onChange ={(e) => setPassword(e.target.value)}/>

                <button>Login</button>

            </form>
        </DefaultLayout>

    )

}