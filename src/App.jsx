import { useState, lazy, Suspense, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Contents from "./components/Contents";
import Sidebar from "./components/Common/SidebarV2";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { HeaderContext, useHeaderMenuCtx } from "./utils/Context.jsx";
import QuillEditor from "./components/Common/QuillEditor.jsx";
import PageScrollBar from "./components/Common/PageScrollBar.jsx";
const ProjectDetails = lazy(() =>
  import("./components/Projects/ProjectDetails.jsx")
);

function App() {
  const [showHeader, setShowHeader] = useState(false);
  const [headerMenu, setHeaderMenu] = useHeaderMenuCtx();
  const navigate = useNavigate();
  // console.log(headerMenu)
  useEffect(() => {
    // setShowHeader(false);
    if (window.innerWidth > 767) {
      setHeaderMenu(false);
    }
  }, []);

  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const errorHandler = (event) => {
      setHasError(true);
      console.error("ErrorBoundary caught an error", event.error);
      // navigate("/404");
      // window.location = "/404";
    };

    window.addEventListener("error", errorHandler);
    window.addEventListener("unhandledrejection", errorHandler);

    return () => {
      window.removeEventListener("error", errorHandler);
      window.removeEventListener("unhandledrejection", errorHandler);
    };
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
            <Route exact path="/404" element={<NotFound />} />
            <Route exact path="/quill-editor" element={<QuillEditor />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        {/* <Contents></Contents> */}
        <Sidebar></Sidebar>
        <Footer></Footer>
        <PageScrollBar />
      </div>
      {/* </HeaderContext.Provider> */}
    </>
  );
}

export default App;
