import React, { useState } from "react";
import "./EmailSection.css";
import * as Yup from "yup";
import { Formik, Form } from "formik";

const EmailSchema = Yup.object({
  email: Yup.string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
});

const EmailSection = () => {
  // const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = ({ email }) => {
    // setIsSubmitted(true);
  };

  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <div className="container">
        <div className="text-container">
          <div className="text-left">
            In love? Darling, you need all the help
            <span className="mobile-hide" /> you can get.
          </div>
          <div className="text-right">
            Sign up for practical advice on the <span className="mobile-hide" />
            irrational matters of the heart.
          </div>
        </div>

        <div className="email-container">
          <Formik
            initialValues={{ email: "" }}
            validationSchema={EmailSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, values, touched, handleChange, handleBlur }) => {
              return (
                <Form>
                  <input
                    id="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                    name="email"
                    placeholder="enter your email"
                  />
                  <button className="input-arrow" type="submit">
                    <img
                      src="https://frankdarling.com/assets/images/newsletter/arrow.svg"
                      alt="Submit-arrow"
                    />
                  </button>

                  {touched.email && Boolean(errors.email) ? (
                    <div className="helper-message danger-text ">
                      Sorry Darling, we need you to try that again.
                    </div>
                  ) : (
                    <div className="helper-message">
                      Frank Darling doesn't spam, and neither should you.
                    </div>
                  )}
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default EmailSection;

// <div className="text-container text-center">
//   <div>Confirmed</div>
//   <div>Thank you Darling, we’ll be in touch.</div>
// </div>
