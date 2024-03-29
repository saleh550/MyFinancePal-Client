import { useTranslation } from "react-i18next";
import { useState,useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, reset } from "../features/auth/authSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });
  const { userName, password } = formData;
  const navigate=useNavigate()
  const {user,isAuthSuccess,isAuthError,isAuthLoading,authMessage}=useSelector(state=>state.auth)
  useEffect(()=>{
    if(isAuthSuccess&&user){
      console.log("redux success", user)
      navigate('/')
    }
    if(isAuthError){
      toast.error(authMessage, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
    dispatch(reset())
  },[isAuthSuccess,isAuthError,user])

  const onChange = (e) => {
    e.preventDefault();
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData))
    // console.log(formData);
  };
  return (
    <>
      <div className="container mt-5">
        <h1 className="my-3">{t("LOGINING")}</h1>
        <form onSubmit={onSubmit} className="row g-4">
          <div className="col-md-6">
            <label for="validationDefaultUsername" class="form-label">
              {t("USERNAME")}
            </label>
            <div dir="ltr" class="input-group">
              <span class="input-group-text" id="inputGroupPrepend2">
                @
              </span>
              <input
                onChange={onChange}
                type="text"
                className="form-control"
                name="userName"
                value={userName}
                id="validationDefaultUsername"
                aria-describedby="inputGroupPrepend2"
                required
              />
            </div>
          </div>
          <div class="col-md-5">
            <label for="validationDefault02" class="form-label">
              {t("PASSWORD")}
            </label>
            <input
              name="password"
              type="password"
              onChange={onChange}
              class="form-control"
              id="validationDefault02"
              value={password}
              required
            />
          </div>

          <div className="col-12">
            <button className="btn btn-success" type="submit">
              {t("LOGIN")}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
export default Login;
