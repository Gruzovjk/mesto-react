import {useEffect, useState} from "react";

function useValidation(value, settings) {
  const [isEmpty, setEmpty] = useState(false);
  const [minLengthError, setMinLengthError] = useState(false);
  const [maxLengthError, setMaxLengthError] = useState(false);
  const [linkError, setLinkError] = useState(false);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const regex = /(https?:\/\/.*\.(?:png|jpe?g|tiff?|png|webp|bmp))/i;
    for (const validation in settings) {
      switch (validation) {
        case "minLength":
          value.length < settings[validation]
            ? setMinLengthError(true)
            : setMinLengthError(false);
          break;
        case "isEmpty":
          value ? setEmpty(false) : setEmpty(true);
          break;
        case "maxLength":
          value.length == settings[validation]
            ? setMaxLengthError(true)
            : setMaxLengthError(false);
          break;
        case "isLink":
          regex.test(String(value).toLocaleLowerCase())
            ? setLinkError(false)
            : setLinkError(true);
          break;
        default:
          return;
      }
    }
  }, [value]);

  useEffect(() => {
    if (isEmpty || minLengthError || linkError) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [isEmpty, minLengthError, linkError]);

  return {
    isEmpty,
    minLengthError,
    maxLengthError,
    linkError,
    isValid,
  };
}

export default useValidation;
