import React from "react";
import Signup from "./components/Signup";
import { Route, Routes } from "react-router-dom";
import SignIn from "./components/SignIn";
import Home from "./components/Home";

function App() {
  return (
    <div className="App  h-[100vh]  flex justify-center items-center">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
