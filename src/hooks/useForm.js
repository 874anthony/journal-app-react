import { useEffect, useMemo, useState } from 'react';

export const useForm = (initialForm = {}, formValidations = {}) => {
  const [formState, setFormState] = useState(initialForm);
  const [formValidation, setFormValidation] = useState({});

  useEffect(() => {
    createValidators();
  }, [formState]);

  useEffect(() => {
    setFormState(initialForm);
  }, [initialForm]);

  const isFormValid = useMemo(
    () => Object.keys(formValidation).every((key) => formValidation[key] === null),
    [formValidation]
  );

  const onInputChange = ({ target }) => {
    const { name, value } = target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  const createValidators = () => {
    const formCheckedValues = {};

    Object.keys(formValidations).forEach((key) => {
      const [fn, errorMessage] = formValidations[key];

      formCheckedValues[`${key}Valid`] = fn(formState[key]) ? null : errorMessage;
    });

    setFormValidation(formCheckedValues);
  };

  return {
    ...formState,
    ...formValidation,
    isFormValid,
    formState,
    onInputChange,
    onResetForm,
  };
};
