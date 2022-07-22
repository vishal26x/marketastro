import { Route, Routes, useLocation } from "react-router-dom";
import { Navbar, Footer, Header } from "./components";
import { Home, Sectors, About, News, Error, SectorStocks } from "./pages";
import "./App.scss";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";


const App = () => {
  // fake authentication Promise
  const authenticate = () => {
    return new Promise((resolve) => setTimeout(resolve, 2000)); // 2 seconds
  };
  useEffect(() => {
    authenticate().then(() => {
      const ele = document.getElementById("loading-screen");
      if (ele) {
        //fade out
        ele.classList.add("available");
        setTimeout(() => {
          // remove from DOM
          ele.outerHTML = "";
        }, 2000);
      }
    });
  }, []);

  const location = useLocation();

  return (
    <>
      <Header />
      <Navbar />
      <div className="main">
          <AnimatePresence exitBeforeEnter>
            <Routes key={location.pathname} location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/sectors" element={<Sectors />} />
              <Route path="/sectors/:sectorId" element={<SectorStocks />} />
              <Route path="/news" element={<News />} />
              <Route path="/about" element={<About />} />
              <Route path="/*" element={<Error />} />
            </Routes>
          </AnimatePresence>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default App;
