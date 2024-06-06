import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  styled,
} from "@mui/material";
import { useFormikContext } from "formik";
import PropTypes from "prop-types";
import React from "react";

const CenteredBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  padding: "20px",
  margin: "0 auto",
});

function Quiz({ name, question, choices, solution }) {
  const { values, setFieldValue } = useFormikContext();

  return (
    <FormControl sx={{ width: "100%" }}>
      <CenteredBox>
        <FormLabel
          sx={{ fontWeight: "bold", fontSize: "18px", color: "black" }}
        >
          {name}. {question} rounded off to the nearest 10 is...
        </FormLabel>
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
            />
          ))}
        </RadioGroup>
      </CenteredBox>
    </FormControl>
  );
}

Quiz.propTypes = {
  name: PropTypes.string.isRequired,
  question: PropTypes.number.isRequired,
  choices: PropTypes.arrayOf(PropTypes.number).isRequired,
  solution: PropTypes.number.isRequired,
};

export default Quiz;
