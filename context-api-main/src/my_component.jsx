import { useContext } from "react";
import ThemeContext from "./context_api";

function MyComponent() {
  let { theme, changeTheme } = useContext(ThemeContext);

  return (
    <div>
      <h1 className={theme}>Hola Soy Goku</h1>
      <button onClick={() => changeTheme()}>
        {theme === "light" ? "Change To Dark" : "Change To Light"}
      </button>
    </div>
  );
}

export default MyComponent;
