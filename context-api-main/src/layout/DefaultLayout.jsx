import { Children } from "react"
import { Link } from "react-router-dom"

export default function DefaultLayout({ children }) {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/Registro">Registro</Link>
                        </li>
                    </ul>
                </nav>
            </header>

            <main>{children}</main>
        </>
    )
}