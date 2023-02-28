import {useState} from "react";
import useValidation from "./useValidation";

function useInput(initialValue, settings) {
  const [value, setValue] = useState("");
  const [isDirty, setDirty] = useState(false);
  const valid = useValidation(value, settings);

  function onChange(e) {
    setValue(e.target.value);
  }

  function onBlur() {
    setDirty(true);
  }

  return {
    value,
    isDirty,
    onChange,
    onBlur,
    ...valid,
    setValue,
  };
}

export default useInput;
