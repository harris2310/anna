/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react-router-dom';
import { useForm } from 'react-hook-form';
import instagramURL from '../icons/instagram-logo.png';

const Contact = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    props.handleFormSubmit(data);
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Name:
          <input id="your-name" {...register('yourName')} />
        </label>
        <label>
          Email:
          <input id="your-email" {...register('yourEmail', { required: true })} />
        </label>
        {errors.yourEmail && <span className="error-message">This field is required</span>}
        <label>
          Message:
          <textarea id="your-email" {...register('yourMessage', { required: true })} />
        </label>
        {errors.yourMessage && <span className="error-message">This field is required</span>}
        <input type="submit" />
        {props.formSubmitted
        && (
        <div className="success-message">
          Success
        </div>
        )}
      </form>
      <div className="social-links">
        <div>
          <a href="https://www.instagram.com/anna_bakogeorgou/">
            <img src={instagramURL} alt="instagram logo" className="instagram-link" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
