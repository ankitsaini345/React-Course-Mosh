import { useContext } from "react";
import AuthContext from "./context/authContext";

const LoginStatus = () => {
  const { user, dispatch } = useContext(AuthContext);

  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <a onClick={() => dispatch({ type: "LOGOUT", name: "" })} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a
        onClick={() => dispatch({ type: "LOGOUT", name: "Ankit Saini" })}
        href="#"
      >
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
