import React from "react";

const CurrentYearStyle = {
  fontSize: "1rem",
};

export default function CurrentYear() {
  const today = new Date();
  var year = today.getFullYear();

  return <span style={CurrentYearStyle}>{year} Mark Ohanesian</span>;
}
