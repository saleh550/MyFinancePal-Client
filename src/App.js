import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { useTranslation } from "react-i18next";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Balance from "./pages/Balance";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === "en";
  const switchLanguageEN = () => {
    i18n.changeLanguage("en");
  };
  const switchLanguageHB = () => {
    i18n.changeLanguage("hb");
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Router>
        <div dir={isEnglish ? "ltr" : "rtl"}>
          <Navbar />
          <Routes>
            <Route path="/" element={<PrivateRoute />}>
              <Route path="/" element={<Home />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/balance" element={<PrivateRoute />}>
              <Route path="/balance" element={<Balance />} />
            </Route>
          </Routes>
        </div>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={true}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </Router>
    </>
  );
}

export default App;
