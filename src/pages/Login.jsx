import { useTranslation } from "react-i18next";
import { useState } from "react";

function Login() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });
  const { userName, password } = formData;
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
    console.log(formData)
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
