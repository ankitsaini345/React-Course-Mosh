import { useReducer } from "react";
import CommentList from "./react-query/CommentList";
import MasterDetail from "./react-query/MasterDetail";
import PostList from "./react-query/PostList";
import TodoList from "./react-query/TodoList";
import TodoMain from "./react-query/TodoMain";
import TaskContext from "./state-management/context/tasksContext";
import Counter from "./state-management/Counter";
import HomePage from "./state-management/HomePage";
import LoginStatus from "./state-management/LoginStatus";
import NavBar from "./state-management/NavBar";
import taskReducer from "./state-management/reducers/taskReducer";
import TaskList from "./state-management/TaskList";

const StarterProjectApp = () => {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      <NavBar />
      <HomePage />
    </TaskContext.Provider>
  );
};

export default StarterProjectApp;
