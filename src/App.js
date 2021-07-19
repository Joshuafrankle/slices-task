import React from "react";
import Login from "./Components/Login";

import { selectUser } from "./userSlice";
import { useSelector } from "react-redux";
import Logout from "./Components/Logout";

const App = () => {
  const user = useSelector(selectUser);
  console.log(user);

  return <div>{user ? <Logout /> : <Login />}</div>;
};

export default App;
