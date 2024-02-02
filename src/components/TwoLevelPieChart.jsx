import { useTranslation } from "react-i18next";
import {
  PieChart,
  Pie,
  Tooltip,
  Sector,
  Cell,
  ResponsiveContainer,
  AreaChart, Area, XAxis, YAxis, CartesianGrid
} from "recharts";
import { BiError } from "react-icons/bi";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import CustomTooltip from "./CustomTooltip";

function TwoLevelPieChart({switchGraph, data, color, COLORS, desc,dateColor }) {
  const { expensesData } = useSelector((state) => state.expenses);
  const { t } = useTranslation();
  const datax = [
    {
      date: 'Page A',
      amount: 400,
    },
    {
      date: 'Page B',
      amount: 3000,
    },
    {
      date: 'Page C',
      amount: 2000,
      amt: 2290,
    },
    {
      date: 'Page D',
      amount: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      date: 'Page E',
      amount: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      date: 'Page F',
      uv: 2390,
      amount: 3800,
      amt: 2500,
    },
    {
      date: 'Page G',
      amount: 3490,
      name:"sa",
      pv: 4300,
      amt: 2100,
    },
  ];
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
          {switchGraph ? (
            <>
              <div
                data-aos="flip-left"
                dir="ltr"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <AreaChart
                  width={350}
                  height={300}
                  data={datax}
                  margin={{
                    top: 10,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip content={<CustomTooltip/>}/>
                  <Area
                    type="monotone"
                    dataKey={"amount"}
                    stroke={dateColor}
                    fill={dateColor}
                  />
                </AreaChart>
              </div>
            </>
          ) : (
            <>
              <div
                data-aos="flip-right"
                dir="ltr"
                style={{ display: "flex", justifyContent: "center" }}
              >
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
            </>
          )}

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
