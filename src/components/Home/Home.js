import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/UserContext";

const Home = () => {
  let { user } = useContext(AuthContext);
  return (
    <div>
      <h1>This is Home Page for {user.displayName}</h1>
    </div>
  );
};

export default Home;
