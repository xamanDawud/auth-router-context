import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const logOutUserHandler = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="navbar bg-primary text-primary-content">
        <Link className="btn btn-ghost normal-case text-xl">Awesome Auth</Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/">
          Home
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/orders">
          Orders
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/login">
          Log In
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/register">
          Register
        </Link>
        {user?.email && <span>Welcome,{user.email}</span>}
        {user?.email ? (
          <button onClick={logOutUserHandler} className="btn btn-sm">
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button className="btn btn-sm">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
