import React from 'react';
import { useFormik } from 'formik';
import "./Register.css"

const Register = () => {
  // Note that we have to initialize ALL of fields with values. These
  // could come from props, but since we don’t want to prefill this form,
  // we just use an empty string. If we don’t do this, React will yell
  // at us.
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: values => {
      alert("Details successfully submitted!");
    },
  });
  return (
    <div className='container-fluid'>
      <div className=' row justify-content-center'>
      <div className=' col-12 col-sm-6 '>
      <h5 className='container'>Hey! welcome to unifinder</h5>
    <form onSubmit={formik.handleSubmit}  className='mb-3 form-container'>

      <div className="mb-3 p-3">
        <label htmlFor="firstName"  className='form-label whitetext'>First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        className='form-control'
        onChange={formik.handleChange}
        value={formik.values.firstName}
      />
      </div>
      <div  className="mb-3 p-3 ">
      <label htmlFor="lastName"  className='form-label  whitetext'>Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        className='form-control '
        onChange={formik.handleChange}
        value={formik.values.lastName}
      />
      </div>
      <div  className="mb-3 p-3 ">
      <label htmlFor="email" className='form-label  whitetext' >Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        className='form-control '
        onChange={formik.handleChange}
        value={formik.values.email}
      />
     </div>
     <div  className="mb-3 p-3 ">
      <label htmlFor="email" className='form-label  whitetext' >Phone</label>
      <input
        id="phone"
        name="phone"
        type="phone"
        className='form-control '
        onChange={formik.handleChange}
        value={formik.values.phone}
      />
     </div> <div  className="mb-3 p-3 ">
      <label htmlFor="email" className='form-label  whitetext' >Country</label>
      <input
        id="country"
        name="country"
        type="country"
        className='form-control '
        onChange={formik.handleChange}
        value={formik.values.country}
      />
     </div> <div  className="mb-3 p-3 ">
      <label htmlFor="email" className='form-label  whitetext' >Expected College Location</label>
      <input
        id="location"
        name="location"
        type="location"
        className='form-control '
        onChange={formik.handleChange}
        value={formik.values.location}
      />
     </div>
      <button type="submit" className='btn btn-block mb-3 p-3 Submitbtn' >Submit</button>
     
    </form>
    </div>
    </div>
    </div>
  );
};

export default Register;