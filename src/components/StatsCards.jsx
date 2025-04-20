import React from "react";
import { FaArrowTrendDown,FaArrowTrendUp  } from "react-icons/fa6";
export default function StatsCards() {
  return (
    <>
      <Cards
        title="Gross Revenue"
        value="$120,054.24"
        pillText="2.75%"
        trend="up"
        period="From Jan 1st- Jul 31st"
      />
      <Cards
        title="Avg Order"
        value="$27.97"
        pillText="1.01%"
        trend="down"
        period="From Jan 1st- Jul 31st"
      />
      <Cards
        title="Trailing year"
        value="$278,054.34"
        pillText="2.75%"
        trend="up"
        period="Previous 365 days"
      />
    </>
  );
}

const Cards = ({ title, value, pillText, trend, period }) => {
  return (
    <div className="p-4 col-span-4 rounded border border-stone-300">
      <div className="flex mb-8 items-start justify-between">
        <div>
          <h3 className="text-stone-500 mb-2 text-sm">{title}</h3>
          <p className="text-3xl font-semibold">{value}</p>
        </div>

        <span className={`text-xs flex items-center gap-1 font-medium px-2 py-2 rounded
            ${trend === "up"? "bg-green-100 text-green-700":"bg-red-100 text-red-700"}`}>
                {trend === "up"? <FaArrowTrendUp />: <FaArrowTrendDown />}
                {pillText}
           </span>
      </div>
      
      <p className="text-xs text-stone-500">{period}</p>
    </div>
  );
};
