/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';

const FormStyle = styled.div`
  width: 100%;
  .form-group {
    width: 100%;
    margin-bottom: 2rem;
  }
  label {
    font-size: 1.8rem;
  }
  input,
  textarea {
    width: 100%;
    font-size: 2rem;
    padding: 1.2rem;
    color: var(--gray-1);
    background-color: var(--deep-dark);
    outline: none;
    border-radius: 8px;
    margin-top: 1rem;
  }
  textarea {
    min-height: 250px;
    resize: vertical;
  }
  button {
    background-color: var(--gray-1);
    color: var(--black);
    font-size: 2rem;
    display: inline-block;
    border: none;
    padding: 1rem 4rem;
    border-radius: 8px;
    cursor: pointer;
  }
`;

const ContactForm = () => {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [message, setMessage] = useState('');

  async function postFormdata({ url, data }) {
    const fetchOptions = {
      method: 'POST',
      header: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: data,
    };
    const response = await fetch(url, fetchOptions);
    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(errorMessage);
    }
    return response.json();
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    // console.log(typeof data);
    const dataStringify = JSON.stringify(data);
    console.log(typeof dataStringify);
    console.log(dataStringify);
    postFormdata('http://127.0.0.1:3030/contact', dataStringify);
  };

  return (
    <FormStyle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="name">
            Your name
            <input
              type="text"
              id="name"
              name="name"
              autoComplete="off"
              {...register('name', {
                required: 'First name is required.',
                pattern: {
                  value: /^[a-zA-Z]+$/,
                },
              })}
              // onChange={(e) => setName(e.target.value)}
            />
          </label>
          {errors.name}

          <label htmlFor="name">
            Email
            <input
              type="text"
              id="email"
              name="email"
              // value={email}
              autoComplete="off"
              {...register('email', {
                required: ' Email is required',
              })}
              // onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          {errors.email}

          <label htmlFor="name">
            Message
            <textarea
              type="text"
              id="message"
              name="message"
              // value={message}
              // onChange={(e) => setMessage(e.target.value)}
              autoComplete="off"
              {...register('message', {
                // required: 'Invalid Email',
                // pattern: {
                //   value: /^[a-zA-Z]+$/,
                //   message: 'lass',
              })}
              // onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          {errors.message}
        </div>
        <button type="submit">Send</button>
      </form>
    </FormStyle>
  );
};

export default ContactForm;
