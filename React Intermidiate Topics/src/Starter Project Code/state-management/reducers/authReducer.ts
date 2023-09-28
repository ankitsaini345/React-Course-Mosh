interface Action {
  type: "LOGIN" | "LOGOUT";
  name: string;
}

const authReducer = (user: string, action: Action): string => {
  switch (action.type) {
    case "LOGIN":
    case "LOGOUT":
      return action.name;
    default:
      return user;
  }
};

export default authReducer;
