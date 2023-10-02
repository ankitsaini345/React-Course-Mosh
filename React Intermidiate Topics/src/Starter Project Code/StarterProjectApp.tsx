import AuthProvider from "./state-management/AuthProvider";
import Counter from "./state-management/counter/Counter";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import { TaskProvider } from "./state-management/tasks";

const StarterProjectApp = () => {
  return (
    <AuthProvider>
      <TaskProvider>
        <Counter />
        <NavBar />
        <HomePage />
      </TaskProvider>
    </AuthProvider>
  );
};

export default StarterProjectApp;
