import { useState } from "react";
import CustomContext from "./context_api";
import MyComponent from "./my_component";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");
  
  let changeTheme = () => {
    let newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <>
      <CustomContext.Provider value={{ theme, changeTheme }}>
        <MyComponent />
      </CustomContext.Provider>
    </>
  );
}

export default App;
