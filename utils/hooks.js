import { useState, useRef } from "react";
import { useSelector, shallowEqual } from "react-redux";

const useForm = (callbackFn, initialState = {}, validate) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setValues((prevState) => {
      return { ...prevState, [e?.target.name]: e?.target.value };
    });
  };

  const handleSubmit = (e) => {
    if (e) e.preventDefault();

    const getError = validate(values);

    if (Object.keys(getError).length === 0) {
      callbackFn();
      setErrors(getError);
    } else {
      setErrors(getError);
    }
  };

  return { handleChange, handleSubmit, errors, values };
};


const useShallowEqualSelector = (selector) =>
  useSelector(selector, shallowEqual);

export { useForm, useShallowEqualSelector };
