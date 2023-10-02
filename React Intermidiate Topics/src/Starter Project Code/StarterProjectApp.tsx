import { useReducer } from "react";
import AuthContext from "./state-management/context/authContext";
import TaskContext from "./state-management/context/tasksContext";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import authReducer from "./state-management/reducers/authReducer";
import taskReducer from "./state-management/reducers/taskReducer";

const StarterProjectApp = () => {
  const [tasks, dispatch] = useReducer(taskReducer, []);
  const [user, authDispatch] = useReducer(authReducer, '');

  return (
    <AuthContext.Provider value={{user, dispatch: authDispatch}}>
    <TaskContext.Provider value={{ tasks, dispatch }}>
      <NavBar />
      <HomePage />
    </TaskContext.Provider>
    </AuthContext.Provider>
  );
};

export default StarterProjectApp;
