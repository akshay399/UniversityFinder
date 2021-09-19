import { useState } from "react";
import database from "./firbase";
import "./Register.css";
import Card from "react-bootstrap/Card";

import { Redirect } from "react-router-dom";
import Advanced from "./examples/Advanced";

const Register = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [phone, setPhone] = useState();
  const [location, setLocation] = useState();
  const [email, setEmail] = useState();
  const [country, setCountry] = useState();

  // Push Function
  const Push = (e) => {
    e.preventDefault();

    database
      .ref("students")
      .push(
        {
          firstName: firstName,
          lastName: lastName,
          phone: phone,
          location: location,
          email: email,
          country: country,
        },
        () => {
          window.location.href = "/cards";
        }
      )
      .catch(alert);
  };

  return (
    <div className="container-fluid formPage">
      <h2 className="headerForForm">
        Fill In The Form To Get Personalised Updates And Results
      </h2>
      <div className=" row justify-content-center">
        <div className=" col-12 col-sm-6 ">
          <Card className="form-container">
            <center>
              <div className="mb-3 p-3 ">
                <label htmlFor="firstname" className="form-label  whitetext">
                  First Name*
                </label>
                <input
                  placeholder="Enter your first name"
                  className="form-control"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>

              <div className="mb-3 p-3 ">
                <label htmlFor="lastName" className="form-label  whitetext">
                  Last Name*
                </label>
                <input
                  placeholder="Enter your last name"
                  className="form-control"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>

              <div className="mb-3 p-3 ">
                <label htmlFor="lastName" className="form-label  whitetext">
                  Phone Number*
                </label>
                <input
                  placeholder="Enter your phone"
                  className="form-control"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div className="mb-3 p-3 ">
                <label htmlFor="lastName" className="form-label  whitetext">
                  Location*
                </label>
                <input
                  placeholder="Enter your location"
                  className="form-control"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>

              <div className="mb-3 p-3 ">
                <label htmlFor="lastName" className="form-label  whitetext">
                  Email Address*
                </label>
                <input
                  placeholder="Enter your email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-3 p-3 ">
                <label htmlFor="lastName" className="form-label  whitetext">
                  Expected College Location*
                </label>
                <input
                  placeholder="Enter your prefered country"
                  className="form-control"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
              </div>

              <button className="Submitbtn p-2" onClick={Push}>
                SUBMIT
              </button>
            </center>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Register;

// import React, { useState, useEffect } from "react";
// import database from "./fire.js";

// import { useFormik } from "formik";

// import { Redirect } from "react-router-dom";
// import Advanced from "./examples/Advanced";

// import "./Register.css";
// // import { useState } from "react";

// const Register = () => {
//   const [firstName, setFirstName] = useState();
//   const [lastName, setLastName] = useState();
//   const [phone, setPhone] = useState();
//   const [location, setLocation] = useState();
//   const [email, setEmail] = useState();
//   const [country, setCountry] = useState();

//   const Push = () => {
//     database
//       .ref("user")
//       .set({
//         firstName: firstName,
//         lastName: lastName,
//         phone: phone,
//         location: location,
//         email: email,
//         country: country,
//       })
//       .catch(alert);
//   };

//   const validate = (values) => {
//     const errors = {};

//     if (!values.email) {
//       errors.email = "Required";
//     } else if (values.email.length < 4) {
//       errors.email = "Must be 5 characters or more";
//     }

//     // if (!values.password) {
//     //   errors.password = 'Required'
//     // } else if (values.password.length < 8) {
//     //   errors.password = 'Must be 8 characters or more'
//     // } else if (values.password === '12345678') {
//     //   errors.password = 'Must not be 12345678 !!!'
//     // }

//     if (!values.firstName) {
//       errors.firstName = "Required";
//     }

//     if (!values.lastName) {
//       errors.lastName = "Required";
//     }

//     if (!values.phone) {
//       errors.phone = "Required";
//     }

//     if (!values.location) {
//       errors.location = "Required";
//     }

//     return errors;
//   };

//   const formik = useFormik({
//     onSubmit: (values) => {
//       alert("Details successfully submitted!");

//       return <Redirect to="/cards/" />;
//     },
//   });
//   return (
//     <div className="container-fluid">
//       <div className=" row justify-content-center">
//         <div className=" col-12 col-sm-6 ">
//           <h5 className="container">Hey! welcome to unifinder</h5>
//           <form onSubmit={formik.handleSubmit} className="mb-3 form-container">
//             <div className="mb-3 p-3">
//               <label htmlFor="firstName" className="form-label whitetext">
//                 First Name
//               </label>
//               <input
//                 id="firstName"
//                 name="firstName"
//                 type="text"
//                 className="form-control"
//                 onChange={(e) => setFirstName(e.target.value)}
//                 // value={formik.values.firstName}
//               />
//               {/* {formik.touched.firstName && formik.errors.firstName ? (
//                 <div className="error">{formik.errors.firstName}</div>
//               ) : null} */}
//             </div>
//             <div className="mb-3 p-3 ">
//               <label htmlFor="lastName" className="form-label  whitetext">
//                 Last Name
//               </label>
//               <input
//                 id="lastName"
//                 name="lastName"
//                 type="text"
//                 className="form-control "
//                 onChange={(e) => setLastName(e.target.value)}
//                 // value={formik.values.lastName}
//               />
//               {formik.errors.lastName ? (
//                 <div className="error">{formik.errors.lastName}</div>
//               ) : null}
//             </div>
//             <div className="mb-3 p-3 ">
//               <label htmlFor="email" className="form-label  whitetext">
//                 Email Address
//               </label>
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 className="form-control "
//                 onChange={(e) => setEmail(e.target.value)}
//                 // value={formik.values.email}
//               />
//               {formik.errors.email ? (
//                 <div className="error">{formik.errors.email}</div>
//               ) : null}
//             </div>
//             <div className="mb-3 p-3 ">
//               <label htmlFor="email" className="form-label  whitetext">
//                 Phone
//               </label>
//               <input
//                 id="phone"
//                 name="phone"
//                 type="phone"
//                 className="form-control "
//                 onChange={(e) => setPhone(e.target.value)}
//                 // value={formik.values.phone}
//               />
//               {formik.errors.phone ? (
//                 <div className="error">{formik.errors.phone}</div>
//               ) : null}
//             </div>{" "}
//             <div className="mb-3 p-3 ">
//               <label htmlFor="email" className="form-label  whitetext">
//                 Country
//               </label>
//               <input
//                 id="country"
//                 name="country"
//                 type="country"
//                 className="form-control "
//                 onChange={(e) => setCountry(e.target.value)}
//                 // value={formik.values.country}
//               />{" "}
//               {formik.errors.country ? (
//                 <div className="error">{formik.errors.country}</div>
//               ) : null}
//             </div>{" "}
//             <div className="mb-3 p-3 ">
//               <label htmlFor="email" className="form-label  whitetext">
//                 Expected College Location
//               </label>
//               <input
//                 id="location"
//                 name="location"
//                 type="location"
//                 className="form-control "
//                 onChange={(e) => setLocation(e.target.value)}
//                 // value={formik.values.location}
//               />{" "}
//               {formik.errors.location ? (
//                 <div className="error">{formik.errors.location}</div>
//               ) : null}
//             </div>
//             <button onClick={Push} className="btn btn-block mb-3 p-3 Submitbtn">
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;
