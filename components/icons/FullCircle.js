import * as React from "react";
const FullCircle = ({ fill, height, width }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill={fill}
    height={height}
    width={width}
    viewBox="0 0 24 24"
  >
    <path
      fillRule="evenodd"
      d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
      clipRule="evenodd"
    />
  </svg>
);
export default FullCircle;
