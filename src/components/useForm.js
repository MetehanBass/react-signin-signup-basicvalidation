import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    password2: ''
  });
  const [errors, setErrors] = useState({});
  

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validate(values));
    
  };

  useEffect(
    () => {
      
    },
    [errors]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;