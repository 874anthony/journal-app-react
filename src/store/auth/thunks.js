import { checkingCredentials } from './';

export const checkingAuthentication = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};

export const startGoogleSignIn = () => {
  return async () => {
    dispatch(checkingCredentials());
  };
};
