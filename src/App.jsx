import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
import TextBox from "./components/TextBox";
import Alert from "./components/Alert";
// import About from "./components/About";
// import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  // state to assign mode color(either dark or light)
  const [Mode, setMode] = useState("light");

  const [alertMsg, setAlertMsg] = useState(null);

  const showalert = (message, type) => {
    setAlertMsg({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlertMsg(null);
    }, 1500);
  };

  // function to change to dark if Mode state is light and vice versa
  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#343c43";
      showalert("Dark Mode Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#f8f9fa";
      showalert("Dark Mode Disabled", "success");
    }
  };

  return (
    <div>
      {/* <BrowserRouter> */}
      <Navbar logoName="KingJr" mode={Mode} toggleMode={toggleMode} />
      <div className="container">
      <Alert alertMsg={alertMsg}/>
      <TextBox showalert={showalert} heading="Enter your text:" mode={Mode} setAlertMsg={setAlertMsg}/>
        {/* <About mode={Mode}/> */}
      </div>
      <Footer />
      {/* <Routes>
          <Route
            path="./components/TextBox"
            element={
              <TextBox
                showalert={showalert}
                heading="Enter your text:"
                mode={Mode}
              />
            }
          ></Route>

          <Route path="./components/about" element={<About />}></Route>

          <Route
            path="./components/Navbar"
            element={
              <Navbar logoName="KingJr" mode={Mode} toggleMode={toggleMode} />
            }
          ></Route>
          <Route
            path="./components/Alert"
            element={<Alert alertMsg={alertMsg} />}
          ></Route>
        </Routes> */}
      {/* </BrowserRouter> */}
    </div>
  );
};

export default App;
