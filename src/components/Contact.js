/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react-router-dom';
import { useForm } from 'react-hook-form';
import instagramURL from '../icons/instagram-logo.png';
import linkedinURL from '../icons/linkedin-logo.png';

const Contact = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = props.handleFormSubmit;
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
      </form>
      <div className="social-links">
        <div>
          <a href="https://www.instagram.com/anna_bakogeorgou/">
            <img src={instagramURL} alt="instagram logo" className="instagram-link" />
          </a>
        </div>
        <div>
          <a href="https://www.instagram.com/xxri145/">
            <img src={linkedinURL} alt="linkedin logo" className="linkedin-link" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
