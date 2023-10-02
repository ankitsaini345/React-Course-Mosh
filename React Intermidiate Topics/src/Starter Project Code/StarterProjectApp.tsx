import { useReducer } from "react";
import AuthProvider from "./state-management/AuthProvider";
import AuthContext from "./state-management/context/authContext";
import TaskContext from "./state-management/context/tasksContext";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import authReducer from "./state-management/reducers/authReducer";
import taskReducer from "./state-management/reducers/taskReducer";

const StarterProjectApp = () => {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  return (
    <AuthProvider>
      <TaskContext.Provider value={{ tasks, dispatch }}>
        <NavBar />
        <HomePage />
      </TaskContext.Provider>
    </AuthProvider>
  );
};

export default StarterProjectApp;
