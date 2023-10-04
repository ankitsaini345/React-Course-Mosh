import { Navigate, Outlet } from "react-router-dom";
import useAuth from "./hooks/useAuth";
import UserListPage from "./UserListPage";

const UserPage = () => {
  const { user } = useAuth();

  if (!user) return <Navigate to={"/login"} />;
  return (
    <div className="row">
      <div className="col">
        <UserListPage />
      </div>
      <div className="col">
        <Outlet />
      </div>
    </div>
  );
};

export default UserPage;
