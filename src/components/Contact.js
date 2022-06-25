/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Contact = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = props.handleFormSubmit;
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('yourName')} />
        <input {...register('yourMessage', { required: true })} />
        {errors.yourMessage && <span>This field is required</span>}
      </form>
    </div>
  );
};

export default Contact;
