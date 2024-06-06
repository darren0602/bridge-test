import React from "react";
import PropTypes from "prop-types";
import { useFormikContext } from "formik";
import { Button, Box, useTheme } from "@mui/material";

function FormSubmitButton({
  children,
  width = "100%",
  disabled = false,
  whiteBg = false,
  onClickButton = null,
  padding = "10px",
}) {
  const theme = useTheme();
  const { handleSubmit } = useFormikContext();

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
        onClick={() => {
          if (onClickButton !== null) {
            onClickButton();
          }
          handleSubmit();
        }}
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

FormSubmitButton.propTypes = {
  whiteBg: PropTypes.bool,
  children: PropTypes.node.isRequired,
  width: PropTypes.string,
  disabled: PropTypes.bool,
  onClickButton: PropTypes.func,
  padding: PropTypes.string,
};

export default FormSubmitButton;
