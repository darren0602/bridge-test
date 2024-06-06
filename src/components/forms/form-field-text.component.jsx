import { Box, TextField } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useFormikContext } from "formik";
import PropTypes from "prop-types";
import React from "react";

function FormFieldText({
  name,
  placeholder,
  type = null,
  width = "100%",
  disabled = false,
  isDisableEnter = false,
  onClickHandle = null,
  isTransparent = false,
  autoFocus = false,
}) {
  const theme = useTheme();
  const {
    setFieldTouched,
    setFieldValue,
    errors,
    touched,
    values,
    handleSubmit,
  } = useFormikContext();

  const keyPress = (e) => {
    if (e.keyCode === 13 && !isDisableEnter) {
      handleSubmit();
    }
  };

  const showError = touched[name] && typeof errors[name] === "string";

  const getType = (inputType) => {
    const tempType = inputType;
    return tempType;
  };

  return (
    <Box>
      <TextField
        autoFocus={autoFocus}
        sx={{
          borderTopLeftRadius: theme.shape.borderRadius[0],
          borderTopRightRadius: theme.shape.borderRadius[0],
          borderBottomLeftRadius: theme.shape.borderRadius[0],
          borderBottomRightRadius: theme.shape.borderRadius[0],
          width,
          "& .MuiOutlinedInput-root": {
            borderTopLeftRadius: theme.shape.borderRadius[0],
            borderTopRightRadius: theme.shape.borderRadius[0],
            borderBottomLeftRadius: theme.shape.borderRadius[0],
            borderBottomRightRadius: theme.shape.borderRadius[0],
            backgroundColor: isTransparent
              ? "transparent"
              : theme.palette.colors.bg.primary,
          },
          "& .MuiOutlinedInput-input": {
            padding: "10px",
          },
        }}
        onClick={onClickHandle}
        disabled={disabled}
        onKeyDown={keyPress}
        helperText={showError ? errors[name] : null}
        variant="outlined"
        error={showError}
        onBlur={() => setFieldTouched(name)}
        name={name}
        type={getType(type || name)}
        placeholder={placeholder}
        onChange={(e) => {
          setFieldValue(name, e.target.value);
        }}
        value={values[name] === null ? "" : values[name]}
      />
    </Box>
  );
}

FormFieldText.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string,
  width: PropTypes.string,
  disabled: PropTypes.bool,
  isDisableEnter: PropTypes.bool,
  autoFocus: PropTypes.bool,
  onClickHandle: PropTypes.func,
  isTransparent: PropTypes.bool,
};

export default FormFieldText;
