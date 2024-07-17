import React from "react";
import { Typography } from "@mui/material";

const CurrentYearStyle = {
  fontSize: "1rem",
};

export default function CurrentYear() {
  const today = new Date();
  var year = today.getFullYear();

  return (
    <span style={CurrentYearStyle}>
      <Typography variant="body1" color="textSecondary">
        {year} Mark Ohanesian
      </Typography>
    </span>
  );
}
