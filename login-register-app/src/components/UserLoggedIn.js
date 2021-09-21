import React from "react";
import "./Login.css";
import { useHistory } from "react-router";

function UserLoggedIn() {
  const history = useHistory();

  const handleRegister = () => {
    history.push("/");
  };

  return (
    <div className="userLoggedIn">
      <img src="https://i.stack.imgur.com/gqKFh.png" alt="" />
      <div className="home__content">
        <button type="button" onClick={handleRegister}>
          Go To Visiter Page
        </button>
      </div>
    </div>
  );
}

export default UserLoggedIn;
