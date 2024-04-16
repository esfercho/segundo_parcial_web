import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./routes/Login.tsx";
import App from "./App.jsx";
import Productos from "./routes/Productos.jsx";
import Registro from "./routes/Registro.jsx";
import RutaProtegida from "./routes/RutaProtegida.jsx";
import { AuthProvider } from "./auth/AuthProvider.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/Registro",
    element: <Registro />,
  },
  {
    path: "/",
    element: <RutaProtegida />,
    children: [
      {
        path: "/Productos",
        element: <Productos />,
      },
    ],
  },
  {
    path: "/App",
    element: <App />,
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    
  </React.StrictMode>
);
