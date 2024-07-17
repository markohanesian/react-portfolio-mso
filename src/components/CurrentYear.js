import React from "react";
import { Typography } from "@mui/material";

export default function CurrentYear() {
  const today = new Date();
  var year = today.getFullYear();

  return (
      <Typography component='span' variant="body1" color="textSecondary">
        {year} Mark Ohanesian
      </Typography>
  );
}
