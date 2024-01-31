import { useTranslation } from "react-i18next";
import TwoLevelPieChart from "../components/TwoLevelPieChart";
import { useSelector } from "react-redux";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import ExpenseForm from "../components/ExpenseForm";
import IncomeForm from "../components/IncomeForm";
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
  const { user } = useSelector((state) => state.auth);
  const { t } = useTranslation();
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
        <TwoLevelPieChart color="#ff2d55" COLORS={COLORS1} desc={"GRAPH_1_DES"} />
        <ExpenseForm/>

        <hr className="dotted-hr"></hr>
        <TwoLevelPieChart color="#34B335" COLORS={COLORS2} desc={"GRAPH_2_DES"} />
        <IncomeForm/>
        <hr className="dotted-hr"></hr>
      </div>
    </>
  );
}
export default Home;
