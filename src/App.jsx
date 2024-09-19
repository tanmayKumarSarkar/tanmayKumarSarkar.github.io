import { useState, lazy, Suspense, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Contents from "./components/Contents";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import { Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { HeaderContext, useHeaderMenuCtx } from "./utils/Context.jsx";
const ProjectDetails = lazy(() =>
  import("./components/Projects/ProjectDetails.jsx")
);

function App() {
  const [showHeader, setShowHeader] = useState(false);
  const [headerMenu, setHeaderMenu] = useHeaderMenuCtx();
  // console.log(headerMenu)
  useEffect(() => {
    // setShowHeader(false);
    if (window.innerWidth > 767) {
      setHeaderMenu(false);
    }
  }, []);

  return (
    <>
      {/* <HeaderContext.Provider value={{showHeader, setShowHeader}}> */}
      <div className="w-full">
        <Header></Header>

        <Suspense
          fallback={
            <div className="bg-[#040016] w-full z-[1] h-screen flex justify-center items-center">
              <div className="loader"></div>
            </div>
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
      {/* </HeaderContext.Provider> */}
    </>
  );
}

export default App;
