import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";

const Login = () => {
  const { loginUser, googleRegister } = useContext(AuthContext);
  const navigate = useNavigate();
  const submitHandler = (event) => {
    event.preventDefault();

    let form = event.target;
    let email = form.email.value;
    let password = form.password.value;

    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        navigate("/orders");
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });

    // console.log(email, password);
  };
  const googleSignInHandler = () => {
    googleRegister()
      .then((result) => {
        const user = result.user;

        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col ">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Please Login now!</h1>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
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
                    <a href className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
                <button
                  onClick={googleSignInHandler}
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

export default Login;
