import { useState, lazy, Suspense } from "react";
import "./App.css";
import Header from "./components/Header";
import Contents from "./components/Contents";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import { Route, Routes } from "react-router-dom";
const ProjectDetails = lazy(() =>
  import("./components/Projects/ProjectDetails.jsx")
);

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="w-full">
        <Header></Header>
        <Suspense
          fallback={
            <div className="bg-[#040016] w-full z-[1] h-screen">Loading...</div>
          }
        >
          <Routes>
            <Route exact path="/" element={<Contents />} />
            <Route
              exact
              path="/project/:projectid"
              element={<ProjectDetails />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        {/* <Contents></Contents> */}
        <Sidebar></Sidebar>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
