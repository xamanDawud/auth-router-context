import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/UserContext";

const Register = () => {
  const [currentName, setCurrentName] = useState("");
  const { createUser, googleRegister, setUserName } = useContext(AuthContext);
  const submitHandler = (event) => {
    event.preventDefault();
    let form = event.target;
    let email = form.email.value;
    let password = form.password.value;
    let name = form.name.value;
    setCurrentName(name);
    createUser(email, password)
      .then((result) => {
        let user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  setUserName(currentName)
    .then(() => {})
    .catch((error) => {
      console.log(error);
    });
  const googleSignUpHandler = () => {
    googleRegister()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col ">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Please Register now!</h1>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="name"
                    name="name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Register</button>
                </div>
                <button
                  onClick={googleSignUpHandler}
                  className="btn btn-outline btn-success"
                >
                  Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
