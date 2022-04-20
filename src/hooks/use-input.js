import { useSelector, useDispatch } from "react-redux";
import { inputActions } from "../store/input-slice";
import { formActions } from "../store/form-slice";

const useInput = (validateValue) => {
  const dispatch = useDispatch();
  const enteredValue = useSelector((state) => state.input.enteredValue);
  const isTouched = useSelector((state) => state.input.isTouched);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = ({ target }) => {
    dispatch(inputActions.setEnteredValue(target.value));
    dispatch(formActions.getInput(target.value));
  };
  const inputBlurHandler = (event) => {
    dispatch(inputActions.setIsTouched(true));
  };
  const reset = () => {
    dispatch(inputActions.setIsTouched(false));
    dispatch(inputActions.setEnteredValue(""));
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
