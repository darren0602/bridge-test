import React from "react";
import PropTypes from "prop-types";
import { Button, Box, useTheme } from "@mui/material";

function CtaButton({
  children,
  width = "100%",
  disabled = false,
  onClickButton,
  padding = "10px",
  whiteBg = false,
}) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        "& .MuiButton-root": {
          borderTopLeftRadius: theme.shape.borderRadius[1],
          borderTopRightRadius: theme.shape.borderRadius[1],
          borderBottomLeftRadius: theme.shape.borderRadius[1],
          borderBottomRightRadius: theme.shape.borderRadius[1],
          textTransform: "none",
          padding,
          border: `1px solid ${theme.palette.colors.brand.primary}`,
          ":disabled": { backgroundColor: "#7B828B" },
          "&:hover": {
            backgroundColor: whiteBg
              ? theme.palette.colors.ui.white
              : theme.palette.colors.brand.primary,
          },
        },
      }}
    >
      <Button
        variant="contained"
        disabled={disabled}
        onClick={onClickButton}
        sx={{
          backgroundColor: whiteBg
            ? theme.palette.colors.ui.white
            : theme.palette.colors.brand.primary,
          width,
          boxShadow: 0,
        }}
      >
        {children}
      </Button>
    </Box>
  );
}

CtaButton.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.string,
  disabled: PropTypes.bool,
  onClickButton: PropTypes.func.isRequired,
  padding: PropTypes.string,
  whiteBg: PropTypes.bool,
};

export default CtaButton;
