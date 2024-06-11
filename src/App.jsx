import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Contents from "./components/Contents";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="w-full">
        <Header></Header>
        <Contents></Contents>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
