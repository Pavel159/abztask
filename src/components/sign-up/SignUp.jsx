import { Formik, Form } from 'formik';
import React, { useEffect, useState } from 'react';
import { fetchPositions, fetchToken } from '../../api/api';
import Button from '../UI/Button';
import InputPhoto from '../UI/inputs/InputPhoto';
import Position from './Position';
import cl from './SignUp.module.scss';
import axios from 'axios';
import { TextField } from '@mui/material';
import * as yup from 'yup';

const SignUp = (props) => {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    fetchToken().then((data) => {
      localStorage.setItem('token', data.token);
    });
    fetchPositions().then((data) => {
      setPositions(data.positions);
    });
  }, []);

  const token = localStorage.getItem('token');
  const phoneRegExp = /^((\+?3)?8)?0\d{9}$/;

  let validationSchema = yup.object().shape({
    name: yup.string().typeError('Must be string').required('Name is required'),
    email: yup
      .string()
      .email('Enter valid email')
      .required('Email is required'),
    phone: yup
      .string()
      .matches(phoneRegExp, 'Phone number is not valid')
      .required('Phone is required'),
    position_id: yup
      .string()
      .typeError('Position is required')
      .required('Position is required'),
    photo: yup.mixed().required('Photo is required'),
  });

  return (
    <section className={cl.signUp}>
      <h1 className={cl.signUp__heading}>Working with POST request</h1>
      <Formik
        initialValues={{
          name: '',
          email: '',
          phone: '',
          position_id: null,
          photo: '',
        }}
        validateOnBlur
        onSubmit={(values) => {
          console.log(values);
          props.setMembers([]);
          props.fetchTeamMembers(1, 6).then((data) => {
            props.setCurrentPage(1);
            props.setMembers(data.users);
            props.setTotalPages(data.total_pages);
          });
          let formData = new FormData();
          formData.append('name', values.name);
          formData.append('email', values.email);
          formData.append('phone', values.phone);
          formData.append('position_id', values.position_id);
          formData.append('photo', values.photo);

          axios({
            method: 'post',
            url: 'https://frontend-test-assignment-api.abz.agency/api/v1/users',
            data: formData,
            headers: { Token: token },
          })
            .then(() => {
              props.setMembers([]);
              props.fetchTeamMembers(1, 6).then((data) => {
                props.setCurrentPage(1);
                props.setMembers(data.users);
                props.setTotalPages(data.total_pages);
              });
            })
            .catch((response) => {
              console.log(response);
            });
        }}
        validationSchema={validationSchema}>
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isValid,
          handleSubmit,
          dirty,
          setFieldValue,
        }) => (
          <Form className={cl.signUp__form}>
            <div className={cl.form__userinfo}>
              <div className={cl.form__input}>
                <TextField
                  id='outlined-basic'
                  label='Name'
                  variant='outlined'
                  type='text'
                  name='name'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.name}
                />
                {touched.name && errors.name && (
                  <p className={cl.form__error}>{errors.name}</p>
                )}
              </div>

              <div className={cl.form__input}>
                <TextField
                  id='outlined-basic'
                  label='Email'
                  variant='outlined'
                  type='email'
                  name='email'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                />
                {touched.email && errors.email && (
                  <p className={cl.form__error}>{errors.email}</p>
                )}
              </div>

              <div className={cl.form__input}>
                <TextField
                  id='outlined-basic'
                  label='Phone'
                  variant='outlined'
                  type='tel'
                  name='phone'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.phone}
                />
                {touched.phone && errors.phone && (
                  <p className={cl.form__error}>{errors.phone}</p>
                )}
              </div>
            </div>
            <div className={cl.form__position}>
              <p className={cl.position__tooltip}>Select your position</p>
              {positions &&
                positions.map((position) => (
                  <Position
                    key={position.id}
                    id={position.id}
                    posName={position.name}
                    onChange={handleChange}
                    value={values.position_id}
                  />
                ))}
              {touched.position_id && errors.position_id && (
                <p className={cl.form__error}>{errors.position_id}</p>
              )}
            </div>
            <div className={cl.form__photo}>
              <div className={cl.photo__item}>
                <InputPhoto
                  name='photo'
                  onChange={(event) => {
                    setFieldValue('photo', event.target.files[0]);
                  }}
                  value={undefined}
                />
                <p className={cl.photo__info}>
                  {values.photo ? values.photo.name : 'Upload your photo'}
                </p>
              </div>
              {touched.photo && errors.photo && (
                <p className={cl.form__error}>{errors.photo}</p>
              )}
            </div>

            <div style={{ marginTop: '54px' }}>
              <Button
                onClick={handleSubmit}
                type='submit'
                disabled={false}
                width='100px'
                height='34px'>
                Sign up
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default SignUp;
