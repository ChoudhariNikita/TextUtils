import Navbar from "./components/Navbar"; // All imports at the top
import TextForm from "./components/TextForm";
import Alert from "./components/Alerts";
import React, { useState } from "react";

let titleOfApp = "TextUtils";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(30 86 131)";
      document.body.style.color = "white";
      document.title = "TextUtils - Dark Mode";
      showAlert("Dark mode has been enabled", "success");

      setInterval(() => {
        document.title = "TextUtils is amazing";
      }, 2000);
      setInterval(() => {
        document.title = "Install TextUtils Now";
      }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      document.title = "TextUtils - Light Mode";
      showAlert("Light mode has been enabled", "success");
    }
  };

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      <Navbar title={titleOfApp} mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm
          heading="Unleash Your Text Magic Below!"
          showAlert={showAlert}
        />
      </div>
    </>
  );
}

export default App;
