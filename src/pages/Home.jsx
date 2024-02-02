import { useTranslation } from "react-i18next";
import TwoLevelPieChart from "../components/TwoLevelPieChart";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import ExpenseForm from "../components/ExpenseForm";
import IncomeForm from "../components/IncomeForm";
import { useEffect, useState } from "react";
import {
  expensesReset,
  getExpensesData,
} from "../features/expenses/expensesSlice";
import { getIncomesData, incomesReset } from "../features/incomes/incomesSlice";
import { toast } from "react-toastify";
import { BsCalendar2Week } from "react-icons/bs";
import { LuCircleDashed } from "react-icons/lu";
const COLORS1 = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#9932cc",
  "#4CAF50",
  "#9C27B0",
  "#FF5722",
  "#795548",
  "#607D8B",
  "#FF9800",
  "#E91E63",
  "#3F51B5",
  "#8BC34A",
  "#9E9E9E",
  "#CDDC39",
  "#2196F3",
  "#FFEB3B",
  "#673AB7",
  "#FF5252",
  "#FFA726",
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
];
const COLORS2 = [
  "#673AB7",
  "#FF5252",
  "#FFA726",
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#9932cc",
  "#4CAF50",
  "#9C27B0",
  "#FF5722",
  "#795548",
  "#607D8B",
  "#FF9800",
  "#E91E63",
  "#3F51B5",
  "#8BC34A",
  "#9E9E9E",
  "#CDDC39",
  "#2196F3",
  "#FFEB3B",
];
function Home() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { isExpensesError, isExpensesSuccess, expensesData, expensesMessage } =
    useSelector((state) => state.expenses);
  const { isIncomesError, isIncomesSuccess, incomesData, incomesMessage } =
    useSelector((state) => state.incomes);
  const { t } = useTranslation();
  const [expensesDataState, setExpensesDataState] = useState({
    data01: [],
    data02: [],
  });
  const [incomesDataState, setIncomesDataState] = useState({
    data01: [],
    data02: [],
  });
  const [expensesSwitch, setExpensesSwitch] = useState(false);
  const [incomesSwitch, setIncomesSwitch] = useState(true);

  useEffect(() => {
    dispatch(getExpensesData());
    dispatch(getIncomesData());
  }, []);
  useEffect(() => {
    if (expensesData) {
      setExpensesDataState((prevState) => {
        return {
          ...prevState,
          data01: expensesData.categories,
          data02: expensesData.expenses,
        };
      });
    }
    if (isExpensesError) {
      toast.success(expensesMessage, {
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

    dispatch(expensesReset());
  }, [isExpensesError, isExpensesSuccess, expensesData]);
  useEffect(() => {
    if (incomesData) {
      setIncomesDataState((prevState) => {
        return {
          ...prevState,
          data01: incomesData.categories,
          data02: incomesData.incomes,
        };
      });
    }
    if (isIncomesError) {
      toast.success(incomesMessage, {
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

    dispatch(incomesReset());
  }, [isIncomesError, isIncomesSuccess, incomesData]);
  return (
    <>
      {user && (
        <>
          <div className=" container">
            <h5 style={{ color: "#9932cc" }}>{user.fullName} </h5>
          </div>
        </>
      )}
      <div className="">
        <button
          onClick={() => setExpensesSwitch(true)}
          className={
            !expensesSwitch ? "btn btn-outline-dark m-1" : "btn btn-dark m-1"
          }
        >
          <BsCalendar2Week className="display-5" />
        </button>
        <button
          onClick={() => setExpensesSwitch(false)}
          className={
            expensesSwitch ? "btn btn-outline-dark m-1" : "btn btn-dark m-1"
          }
        >
          <LuCircleDashed className="display-5" />
        </button>

        <TwoLevelPieChart
          switchGraph={expensesSwitch}
          data={expensesDataState}
          color="#ff2d55"
          COLORS={COLORS1}
          desc={"GRAPH_1_DES"}
          dateColor="#ff2d55"
        />
        <ExpenseForm />

        <hr className="dotted-hr"></hr>

        <button
          onClick={() => setIncomesSwitch(true)}
          className={
            !incomesSwitch ? "btn btn-outline-dark m-1" : "btn btn-dark m-1"
          }
        >
          <BsCalendar2Week className="display-5" />
        </button>
        <button
          onClick={() => setIncomesSwitch(false)}
          className={
            incomesSwitch ? "btn btn-outline-dark m-1" : "btn btn-dark m-1"
          }
        >
          <LuCircleDashed className="display-5" />
        </button>

        <TwoLevelPieChart
          switchGraph={incomesSwitch}
          data={incomesDataState}
          color="#34B335"
          COLORS={COLORS2}
          desc={"GRAPH_2_DES"}
          dateColor={"#34B335"}
        />
        <IncomeForm />
        <hr className="dotted-hr"></hr>
      </div>
    </>
  );
}
export default Home;
