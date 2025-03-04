import React from "react";

const GridIcon = ({ size = 24, color = "currentColor" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      className="bi bi-grid"
      viewBox="0 0 16 16"
    >
      <path d="M2 2h3v3H2V2m4 0h4v3H6V2m5 0h3v3h-3V2M2 6h3v4H2V6m4 0h4v4H6V6m5 0h3v4h-3V6M2 11h3v3H2v-3m4 0h4v3H6v-3m5 0h3v3h-3v-3" />
    </svg>
  );
};

export default GridIcon;
