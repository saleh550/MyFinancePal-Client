import { useTranslation } from "react-i18next";
import {
  PieChart,
  Pie,
  Tooltip,
  Sector,
  Cell,
  ResponsiveContainer,
} from "recharts";

function TwoLevelPieChart({color,COLORS,desc}) {
  const { t } = useTranslation();
  const data01 = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];
  const data02 = [
    { name: "A1", value: 100 },
    { name: "A2", value: 300 },
    { name: "B1", value: 100 },
    { name: "B2", value: 80 },
    { name: "B3", value: 40 },
    { name: "B4", value: 30 },
    { name: "B5", value: 50 },
    { name: "C1", value: 100 },
    { name: "C2", value: 200 },
    { name: "D1", value: 150 },
    { name: "D2", value: 50 },
  ];
//   const COLORS = [
//     "#0088FE",
//     "#00C49F",
//     "#FFBB28",
//     "#FF8042",
//     "#9932cc",
//     "#4CAF50",
//     "#9C27B0",
//     "#FF5722",
//     "#795548",
//     "#607D8B",
//     "#FF9800",
//     "#E91E63",
//     "#3F51B5",
//     "#8BC34A",
//     "#9E9E9E",
//     "#CDDC39",
//     "#2196F3",
//     "#FFEB3B",
//     "#673AB7",
//     "#FF5252",
//     "#FFA726",
//     "#0088FE",
//     "#00C49F",
//     "#FFBB28",
//     "#FF8042",
//     "#0088FE",
//     "#00C49F",
//     "#FFBB28",
//     "#FF8042",
//   ];
  return (
    <>
      {/* <ResponsiveContainer width="100%" > */}

      <div dir="ltr" style={{ display: "flex", justifyContent: "center" }}>
        <PieChart
          width={400}
          height={300}
          margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        >
          <Pie
            data={data01}
            dataKey="value"
            isAnimationActive={false}
            cx="50%"
            cy="50%"
            outerRadius={62}
            fill="#00C49F"
          >
            {data01.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Pie
            data={data02}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={65}
            outerRadius={86}
            fill={color}
            label
          />
        </PieChart>
      </div>
      <div className="text-center">
        <h5 className="text-secondary">{t(desc)}</h5>

      </div>

      {/* </ResponsiveContainer> */}
    </>
  );
}
export default TwoLevelPieChart;
