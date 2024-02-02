import React from "react";
import { useTranslation } from "react-i18next";

function CustomTooltip({ active, payload, label }) {
  const { t } = useTranslation();
  if (active && payload) {
    return (
      <div className="custom-tooltip">
        <h6>{t("DATE")}{`: ${label}`}</h6>
        <h6>{t("AMOUNT")}{`: ${payload[0].value}`}</h6>
        <h6>{t("NAME")}{`: ${payload[0].payload.name}`}</h6>
        <h6>{t("CATEGORY")}{`: ${t(payload[0].payload.category)}`}</h6>
      </div>
    );
  }

  return null;
}

export default CustomTooltip;
