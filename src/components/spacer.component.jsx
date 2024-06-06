import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";

function Spacer({ position = "top", size = "s" }) {
  const sizeVariant = {
    xs: 0.5,
    s: 1,
    m: 2,
    l: 3,
    xl: 4,
    xxl: 8,
    xxxl: 12,
  };

  const sizeIndex = sizeVariant[size];

  const positionVariant = {
    top: "marginTop",
    left: "marginLeft",
    right: "marginRight",
    bottom: "marginBottom",
  };

  const positionIndex = positionVariant[position];

  switch (positionIndex) {
    case "marginLeft":
      return <Box sx={{ marginLeft: sizeIndex }} />;
    case "marginRight":
      return <Box sx={{ marginRight: sizeIndex }} />;
    case "marginBottom":
      return <Box sx={{ marginBottom: sizeIndex }} />;
    default:
      return <Box sx={{ marginTop: sizeIndex }} />;
  }
}

Spacer.propTypes = {
  position: PropTypes.string,
  size: PropTypes.string,
};

export default Spacer;
