import React from "react";
import PropTypes from "prop-types";
import { Formik } from "formik";

function Form({ initialValues, onSubmit, validationSchema, children }) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => children}
    </Formik>
  );
}

Form.propTypes = {
  initialValues: PropTypes.instanceOf(Object).isRequired,
  validationSchema: PropTypes.instanceOf(Object).isRequired,
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Form;
