import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useFormikContext } from "formik";
import PropTypes from "prop-types";
import React from "react";
import Spacer from "./spacer.component";

const CenteredBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  padding: "20px",
  margin: "0 auto",
});

function Quiz({ name, question, choices, solution, showResult }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { values, setFieldValue } = useFormikContext();

  const renderResult = () => {
    if (!values[name] || Number(values[name]) !== solution)
      return (
        <ClearIcon fontSize={isMobile ? "medium" : "large"} color="error" />
      );
    else
      return (
        <CheckIcon fontSize={isMobile ? "medium" : "large"} color="success" />
      );
  };

  return (
    <FormControl sx={{ width: "100%" }}>
      <CenteredBox>
        <FormLabel
          sx={{ fontWeight: "bold", fontSize: "18px", color: "black" }}
        >
          {name}. {question} rounded off to the nearest 10 is...
        </FormLabel>

        <Box display="flex" alignItems="center">
          <RadioGroup
            name={name}
            value={values[name] || ""}
            onChange={(e) => {
              setFieldValue(name, e.target.value);
            }}
          >
            {choices.map((choice) => (
              <FormControlLabel
                key={choice}
                value={choice}
                control={<Radio />}
                label={choice}
                disabled={showResult}
              />
            ))}
          </RadioGroup>
          <Spacer position="left" size="l" />
          {showResult && renderResult()}
        </Box>
      </CenteredBox>
    </FormControl>
  );
}

Quiz.propTypes = {
  name: PropTypes.string.isRequired,
  question: PropTypes.number.isRequired,
  choices: PropTypes.arrayOf(PropTypes.number).isRequired,
  solution: PropTypes.number.isRequired,
  showResult: PropTypes.bool.isRequired,
};

export default Quiz;
