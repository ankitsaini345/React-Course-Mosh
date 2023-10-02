import React, { Dispatch } from "react";
import { AuthAction } from "../reducers/authReducer";

interface AuthContext {
    user: String,
    dispatch: Dispatch<AuthAction>
}

const AuthContext = React.createContext<AuthContext>({} as AuthContext)

export default AuthContext;