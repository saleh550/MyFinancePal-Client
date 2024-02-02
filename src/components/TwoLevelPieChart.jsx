import { useTranslation } from "react-i18next";
import {
  PieChart,
  Pie,
  Tooltip,
  Sector,
  Cell,
  ResponsiveContainer,
} from "recharts";
import { BiError } from "react-icons/bi";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function TwoLevelPieChart({ data, color, COLORS, desc }) {
  const { expensesData } = useSelector((state) => state.expenses);
  const { t } = useTranslation();

  return (
    <>
      {/* <ResponsiveContainer width="100%" > */}
      {data.data01.length == 0 && data.data02.length == 0 ? (
        <>
          <div className="text-center my-2">
            <div className="no-data-circle">
              <h6>
                <BiError className="display-1 text-warning" />
                <br />
                {t("NO_ENOUGH_DATA_MESSAGE")}
              </h6>
            </div>
          </div>
        </>
      ) : (
        <>
          <div dir="ltr" style={{ display: "flex", justifyContent: "center" }}>
            <PieChart
              width={400}
              height={300}
              margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
            >
              <Pie
                data={data.data01}
                dataKey="value"
                isAnimationActive={false}
                cx="50%"
                cy="50%"
                outerRadius={62}
                fill="#00C49F"
              >
                {data.data01.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Pie
                data={data.data02}
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
        </>
      )}

      {/* </ResponsiveContainer> */}
    </>
  );
}
export default TwoLevelPieChart;
