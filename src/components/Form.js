import React, { useEffect, useState } from "react";
import Input from "./Input.js";
import Button from "./Button.js";

function Form() {
  const [user, setUser] = useState({
    userName: "",
    password: "",
  });
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const [userNameRequired, setUserNameRequired] = useState(false);
  const [passwordRequired, setPasswordRequired] = useState(false);

  const handleSetUserName = (e) => {
    const userName = e.target.value;

    setUserName(userName);
    if (!userName) {
      setUserNameRequired(true);
    } else setUserNameRequired(false);
  };

  const handleSetPassword = (e) => {
    const password = e.target.value;

    setPassword(password);
    if (!password) {
      setPasswordRequired(true);
    } else setPasswordRequired(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      userName,
      password,
    };
    setUser(user);
    if (userNameRequired || passwordRequired) {
      console.log(1);
      return;
    } else {
      console.log(2);
      localStorage.setItem(userName, password);
    }
  };

  useEffect(() => {
    if (user) {
      document.title = user.userName;
    }
  }, [user]);

  console.log("user -->", user);
  return (
    <form className="form-main">
      <Input
        type="text"
        pHolder="Login"
        onChange={handleSetUserName}
        required={userNameRequired}
      />
      <Input
        type="password"
        pHolder="Password"
        onChange={handleSetPassword}
        required={passwordRequired}
      />
      <Button
        type="submit"
        text="Submit"
        onClick={handleSubmit}
        required={userNameRequired || passwordRequired}
      />
    </form>
  );
}

export default Form;
