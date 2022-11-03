import React, { useState } from "react";
import Sidebar from "./components/sidebar-container/Sidebar";
import { BrowserRouter } from 'react-router-dom';
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Translation from "./components/translation/Translation.json";
import TranslationSelect from "./components/translation/TranslationSelect";
import Routers from "./components/Routers";
function App() {
  const [selection, setSelection] = useState(1);
 
  const [align, setAlign] = useState("left");
  const [content, setContent] = useState(Translation.english);

 const HandleSearch = ()=> {
  if(selection === 2){
    setSelection(1)
    setAlign("left")
    setContent(Translation.english)
  } else if(selection === 1) {
    setSelection(2)
    setAlign("right")
    setContent(Translation.arabic)
  }
 }



return (
  <div className="App">
    <BrowserRouter>
      <Sidebar content={content} />
      <div className="main">
        <Navbar content={content} />
        <TranslationSelect selection={selection} align={align} HandleSearch={HandleSearch} />
        <Routers content={content} />
      </div>
    </BrowserRouter> 
  </div>
  );
}
export default App;
