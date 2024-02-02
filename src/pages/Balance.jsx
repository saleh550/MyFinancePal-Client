import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PiFileCsvThin } from "react-icons/pi";
import {
  expensesReset,
  getExpensesAndIncomes,
} from "../features/expenses/expensesSlice";
import { IoRadioButtonOnSharp } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import Papa from "papaparse";
const convertToCSV = (data) => {
  const csv = Papa.unparse(data);
  return csv;
};
const downloadCSV = (data, filename) => {
  const csv = convertToCSV(data);
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });

  const link = document.createElement("a");
  if (link.download !== undefined) {
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } else {
    alert(
      "Your browser does not support the download feature. Please try using a different browser."
    );
  }
};

function Balance() {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [data, setData] = useState([]);
  const { expensesAndIncomes, isExpensesSuccess, isExpensesError } =
    useSelector((state) => state.expenses);
  useEffect(() => {
    dispatch(getExpensesAndIncomes());
  }, []);
  useEffect(() => {
    setData(expensesAndIncomes);
  }, [expensesAndIncomes]);
  useEffect(() => {
    dispatch(expensesReset());
  }, [isExpensesSuccess, isExpensesError]);

  const onChange = (e) => {
    e.preventDefault();
    if (e.target.value === "all") {
      setData(expensesAndIncomes);
      return;
    }
    const filteredArray = expensesAndIncomes.filter(
      (item) => item.category === e.target.value
    );
    // Update the state with the filtered array
    setData(filteredArray);
  };
  const onDownload = () => {
    downloadCSV(data, "data.csv");
  };
  return (
    <>
      <din className="text-center">
        <h3 className="my-3 text-secondary">{t("BALANCE_TITLE")}</h3>
        <div className=" container col-md-4">
          <select
            name="category"
            type="text"
            onChange={onChange}
            class="form-control"
            id="validationDefault02"
            defaultValue={null}
            required
          >
            <option value="" selected>
              {t("FILTER_BY_CATEGORY")}
            </option>
            <option value="FOOD">{t("FOOD")}</option>
            <option value="RESTAURANTS">{t("RESTAURANTS")}</option>
            <option value="SHOPPING">{t("SHOPPING")}</option>
            <option value="FUEL">{t("FUEL")}</option>
            <option value="CIGARETTES">{t("CIGARETTES")}</option>
            <option value="WORK">{t("WORK")}</option>
            <option value="DEPOSIT">{t("DEPOSIT")}</option>
            <option value="BANK_TRANSFER">{t("BANK_TRANSFER")}</option>
            <option value="all">{t("ALL")}</option>
          </select>
        </div>
      </din>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">{t("DATE")}</th>
            <th scope="col">{t("NAME")}</th>
            <th scope="col">{t("CATEGORY")}</th>
            <th scope="col">{t("AMOUNT")}</th>
          </tr>
        </thead>
        <tbody>
          {expensesAndIncomes &&
            data &&
            data.map((data) => {
              return (
                <>
                  <tr>
                    <th scope="row">
                      <IoRadioButtonOnSharp style={{ color: data.color }} />
                    </th>
                    <td>{data.date}</td>
                    <td>{data.name}</td>
                    <td>{t(data.category)}</td>
                    <td>{data.amount} ₪</td>
                  </tr>
                </>
              );
            })}
        </tbody>
      </table>
      <div>
        <button className="btn btn-outline-success mt-3 mb-5 mx-3" onClick={onDownload}>
          <PiFileCsvThin className="display-5 " />
          {t("DOWNLOAD")}
        </button>
      </div>
    </>
  );
}
export default Balance;
