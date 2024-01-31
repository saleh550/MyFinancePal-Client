import { useState,useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { register,reset } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
function Register() {
  const navigate=useNavigate()
  const {user,isAuthSuccess,isAuthError,isAuthLoading,authMessage}=useSelector(state=>state.auth)
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    password: "",
    comfortPassword: "",
    salary:""
  });
  const { fullName, userName, password, comfortPassword,salary } = formData;

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
    dispatch(register(formData));
  };
  return (
    <>
      <div className="container mt-5">
        <h1 className="my-3">{t("REGISTER")}</h1>
        <form onSubmit={onSubmit} class="row g-4">
          <div class="col-md-3">
            <label for="validationDefault01" class="form-label">
              {t("FULLNAME")}
            </label>
            <input
              onChange={onChange}
              type="text"
              class="form-control"
              id="validationDefault01"
              name="fullName"
              value={fullName}
              required
            />
          </div>
          <div class="col-md-1">
            <label for="validationDefault01" class="form-label">
              {t("SALARY")} ₪
            </label>
            <input
              onChange={onChange}
              type="number"
              class="form-control"
              id="validationDefault01"
              name="salary"
              value={salary}
              required
            />
          </div>

          <div class="col-md-6">
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
                class="form-control"
                id="validationDefaultUsername"
                aria-describedby="inputGroupPrepend2"
                name="userName"
                value={userName}
                required
              />
            </div>
          </div>
          <div class="col-md-5">
            <label for="validationDefault02" class="form-label">
              {t("PASSWORD")}
            </label>
            <input
              onChange={onChange}
              type="password"
              class="form-control"
              id="validationDefault02"
              name="password"
              value={password}
              required
            />
          </div>
          <div class="col-md-5">
            <label for="validationDefault02" class="form-label">
              {t("COMFORT_PASSWORD")}
            </label>
            <input
              onChange={onChange}
              type="password"
              class="form-control"
              id="validationDefault02"
              name="comfortPassword"
              value={comfortPassword}
              required
            />
          </div>
          <div class="col-12">
            <button class="btn btn-success" type="submit">
              {t("REGISTER")}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
export default Register;
