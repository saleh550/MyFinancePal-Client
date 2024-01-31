import { useState } from "react";
import { useTranslation } from "react-i18next";
import { MdOutlineAddCircleOutline } from "react-icons/md";
function ExpenseForm() {
  const [isDisable, setIsDisable] = useState(false);
  const { t } = useTranslation();
  const [formData, SetFormData] = useState({
    name: "",
    category: "",
    date: "",
    amount: "",
  });
  const { name, category, date, amount } = formData;
  const onChange = (e) => {
    e.preventDefault();
    SetFormData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("expense form ", formData);
  };
  const onCancel=(e)=>{
    e.preventDefault();
    setIsDisable(false);
    SetFormData({
        name: "",
        category: "",
        date: "",
        amount: "",
    })
  }
  return (
    <>
      <div className="container">
        <div className="text-center">
          <button disabled={isDisable} className="btn btn-outline-success my-1" onClick={()=>setIsDisable(true)}>
            {t("ADD_EXPENSE")}
            <MdOutlineAddCircleOutline
              className="text-success"
              style={{ fontSize: "25px" }}
            />
          </button>
        </div>
        {isDisable && (
          <>
            <form onSubmit={onSubmit} className="row g-4 mt-2">
              <div className="col-md-4">
                <label for="validationDefaultUsername" class="form-label">
                  {t("EXPENSE_NAME")}
                </label>
                <div dir="ltr" class="input-group">
                  <input
                    onChange={onChange}
                    type="text"
                    className="form-control"
                    name="name"
                    value={name}
                    id="validationDefaultUsername"
                    required
                  />
                </div>
              </div>
              <div class="col-md-4">
                <label for="validationDefault02" class="form-label">
                  {t("CATEGORY")}
                </label>
                <select
                  name="category"
                  type="text"
                  onChange={onChange}
                  class="form-control"
                  id="validationDefault02"
                  defaultValue={null}
                  value={category}
                  required
                >
                  <option value="" selected>
                    {t("SELECT_AN_OPTION")}
                  </option>
                  <option value="FOOD">{t("FOOD")}</option>
                  <option value="RESTAURANTS">{t("RESTAURANTS")}</option>
                  <option value="SHOPPING">{t("SHOPPING")}</option>
                  <option value="FUEL">{t("FUEL")}</option>
                  <option value="CIGARETTES">{t("CIGARETTES")}</option>
                  <option value="OTHER">{t("OTHER")}</option>
                </select>
              </div>
              <div class="col-md-2">
                <label for="validationDefault02" class="form-label">
                  {t("DATE")}
                </label>
                <input
                  name="date"
                  type="date"
                  onChange={onChange}
                  class="form-control"
                  id="validationDefault02"
                  value={date}
                  required
                />
              </div>
              <div class="col-md-2">
                <label for="validationDefault02" class="form-label">
                  {t("AMOUNT")} ₪
                </label>

                <input
                  name="amount"
                  type="number"
                  onChange={onChange}
                  class="form-control"
                  id="validationDefault02"
                  value={amount}
                  required
                />
              </div>
              <div className=" col-12">
                <button className="btn btn-outline-success" type="submit">
                  {t("SAVE")}
                </button>{" "}
                <button onClick={onCancel} className="btn btn-outline-danger" type="button">
                  {t("CANCEL")}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </>
  );
}
export default ExpenseForm;
