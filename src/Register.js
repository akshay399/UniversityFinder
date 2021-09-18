import React from 'react';
import { useFormik } from 'formik';
import "./Register.css"

const Register = () => {
  // Note that we have to initialize ALL of fields with values. These
  // could come from props, but since we don’t want to prefill this form,
  // we just use an empty string. If we don’t do this, React will yell
  // at us.

  // A custom validation function. This must return an object

  // which keys are symmetrical to our values/initialValues

  const validate = values => {
    const errors = {}

    if (!values.email) {
      errors.email = 'Required'
    } else if (values.email.length < 4) {
      errors.email = 'Must be 5 characters or more'
    }

    // if (!values.password) {
    //   errors.password = 'Required'
    // } else if (values.password.length < 8) {
    //   errors.password = 'Must be 8 characters or more'
    // } else if (values.password === '12345678') {
    //   errors.password = 'Must not be 12345678 !!!'
    // }

    if (!values.firstName) {
      errors.firstName = 'Required'
    }

    if (!values.lastName) {
      errors.lastName = 'Required'
    }

    if (!values.phone) {
      errors.phone = 'Required'
    }


    if (!values.location) {
      errors.location = 'Required'
    }



    return errors
  }


  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: 0,
      location: ''
    },
    onSubmit: values => {
      alert("Details successfully submitted!");
    },
  });
  return (
    <div className=' formPage container-fluid'>
      <h2 className="headerForForm">Fill In This Form For Personalised Updates And Results</h2>
      <div className=' row justify-content-center'>
        <div className=' col-12 col-sm-6 '>
          <form onSubmit={formik.handleSubmit} className='mb-3 form-container'>

            <div className="mb-3 p-3">
              <label htmlFor="firstName" className='form-label whitetext'>First Name*</label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                className='form-control'
                onChange={formik.handleChange}
                value={formik.values.firstName}
              />
              {formik.touched.firstName && formik.errors.firstName ? <div className='error'>{formik.errors.firstName}</div> : null}
            </div>
            <div className="mb-3 p-3 ">
              <label htmlFor="lastName" className='form-label  whitetext'>Last Name*</label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                className='form-control '
                onChange={formik.handleChange}
                value={formik.values.lastName}
              />
              {formik.errors.lastName ? <div className='error'>{formik.errors.lastName}</div> : null}
            </div>
            <div className="mb-3 p-3 ">
              <label htmlFor="email" className='form-label  whitetext' >Email Address*</label>
              <input
                id="email"
                name="email"
                type="email"
                className='form-control '
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              {formik.errors.email ? <div className='error'>{formik.errors.email}</div> : null}
            </div>
            <div className="mb-3 p-3 ">
              <label htmlFor="email" className='form-label  whitetext' >Phone*</label>
              <input
                id="phone"
                name="phone"
                type="phone"
                className='form-control '
                onChange={formik.handleChange}
                value={formik.values.phone}
              />
              {formik.errors.phone ? <div className='error'>{formik.errors.phone}</div> : null}
            </div> <div className="mb-3 p-3 ">
              <label htmlFor="email" className='form-label  whitetext' >Country*</label>
              <input
                id="country"
                name="country"
                type="country"
                className='form-control '
                onChange={formik.handleChange}
                value={formik.values.country}
              />            {formik.errors.country ? <div className='error'>{formik.errors.country}</div> : null}

            </div> <div className="mb-3 p-3 ">
              <label htmlFor="email" className='form-label  whitetext' >Expected College Location*</label>
              <input
                id="location"
                name="location"
                type="location"
                className='form-control '
                onChange={formik.handleChange}
                value={formik.values.location}
              />            {formik.errors.location ? <div className='error'>{formik.errors.location}</div> : null}

            </div>
            <button type="submit" className='btn btn-block mb-3 p-2 Submitbtn' >Submit</button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;