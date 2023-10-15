import react from "react";

import Form from "./Components/Form/Form";
import DataList from "./Components/List/DataList"
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import { Route ,Routes } from "react-router-dom";

function App() {
 
  return (
    <div className="App">
      <Navbar/>
     
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/form" element={<Form />} />
        <Route path="/users" element={<DataList />} />
      </Routes>
     
    </div>
  );
}

export default App;
