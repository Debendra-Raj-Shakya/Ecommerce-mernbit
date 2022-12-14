import { Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import * as Yup from 'yup'
const Login = () => {
  const initialValues = {
    fullName: "",
    email: "",
    password: "",
  };
  const SignUpFormValidation=Yup.object().shape({
    fullName:Yup.string().trim().required("full name is required"),
    email:Yup.string().email().required("email is required"),
    password:Yup.string().required("password is required").min(8,"password must be 8 character").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,"Minimum eight characters, at least one uppercase letter, one lowercase letter and one number: ")

  })

  const onLoginSubmit=async(data:any)=>{

  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onLoginSubmit}
      validationSchema={SignUpFormValidation}
    >
      {({ isSubmitting }) => (
        <form>
          <section className="py-[40px] xl:py-[100px] min-h-screen">
            {/* <div className="container mx-auto"> */}
            <div className=" grid md:grid-cols-2 ">
              <img
                alt="temple"
                src="/image1.jpg"
                className=" w-full h-full object-cover shadow-2xl"
              ></img>

              <div className="bg-base-300 shadow-xl p-3 lg:p-10">
                <h1 className="text-4xl w-full text-center">
                  Welcome to Jammy
                </h1>

                <div className="form-control my-5 relative">
                  <label className="label">
                    <span className="label-text">Full Name</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    autoComplete="tel"
                    placeholder="Enter your Name"
                    className="input input-bordered"
                  />
                </div>

                <div className="form-control my-5 relative">
                  <label className="label">
                    <span className="label-text">Email Address</span>
                  </label>
                  <input
                    type="text"
                    name="email"
                    autoComplete="email"
                    placeholder="Enter Your Email address"
                    className="input input-bordered "
                  />
                </div>

                <div className="form-control mt-5">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    className="textarea textarea-bordered rounded-none"
                    type="password"
                    placeholder="Enter Your  Password"
                    name="password"
                  />
                </div>
                <div className="flex justify-center  w-full pt-4">
                  <button type="submit" className="uppercase btn btn-accent ">
                    Create Account
                  </button>
                </div>
                <div className="flex justify-center  w-full pt-5">
                  <label className="label">
                    <span className="label-text">
                      Need new account{" "}
                      {
                        <Link className="link-secondary" to="/signup">
                        Sign up
                        </Link>
                      }
                    </span>
                  </label>
                </div>
              </div>
            </div>
            {/* </div> */}
          </section>
        </form>
      )}
    </Formik>

    // </div>
  );
};

export default Login;
