export interface AuthAction {
  type: "LOGIN" | "LOGOUT";
  name: string;
}

const authReducer = (user: string, action: AuthAction): string => {
  switch (action.type) {
    case "LOGIN":
    case "LOGOUT":
      return action.name;
    default:
      return user;
  }
};

export default authReducer;
