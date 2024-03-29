import { useTranslation } from "react-i18next";
import { MdLanguage } from "react-icons/md";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/auth/authSlice";

function Navbar() {
  const { user } = useSelector((state) => state.auth);
  const { t, i18n } = useTranslation();
  const dispatch =useDispatch();
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <Link to="/" class="navbar-brand text-danger">
            <strong>MyFinancePal</strong> 
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <Link
                  to="/"
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  {t("HOME")}
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  to="/balance"
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  {t("BALANCE")}
                </Link>
              </li>
              {/* <li class="nav-item">
                <a class="nav-link" href="#">
                  Link
                </a>
              </li>
              <li class="nav-item dropdown"></li>
              <li class="nav-item">
                <a class="nav-link disabled" aria-disabled="true">
                  Disabled
                </a>
              </li> */}
            </ul>
            <div className="d-flex" role="search">
              <div className="dropdown mx-1">
                <button
                  class="btn  dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                >
                  <MdLanguage
                    className="text-success"
                    style={{ fontSize: "30px" }}
                  />
                </button>
                <ul class="dropdown-menu">
                  <li onClick={() => i18n.changeLanguage("en")}>
                    <a class="dropdown-item">English</a>
                  </li>
                  <li onClick={() => i18n.changeLanguage("hb")}>
                    <a class="dropdown-item">עברית</a>
                  </li>
                </ul>
              </div>
              {!user ? (
                <>
                  <Link to="/login" className="btn btn-outline-dark mx-1">
                    {t("LOGIN")}
                  </Link>
                  <Link to="/register" className="btn btn-outline-secondary">
                    {t("REGISTER")}
                  </Link>
                </>
              ) : (
                <>
                  <Link onClick={()=>{dispatch(logout())}} to="/login" className="btn btn-outline-secondary mx-1">
                    {t("LOGOUT")}
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
