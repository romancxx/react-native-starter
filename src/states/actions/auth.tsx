import { LOGIN, LOGOUT, LOGIN_SUCCESS } from "@states/reducers/auth";
import { store } from "@states/store";

export function login(username: string, password: string) {
  setTimeout(() => {
    store.dispatch({ type: LOGIN_SUCCESS });
  }, 2000);

  return {
    type: LOGIN
    // payload: {
    //   request: {
    //     method: "POST",
    //     url: "/api/login",
    //     data: {
    //       username: username,
    //       password: password
    //     }
    //   }
    // }
  };
}


export function logout(): any {
  return {
    type: LOGOUT
  };
}


  export const updateAuth = ({ dispatch }: any) => {
    return () => dispatch(logout());
  };