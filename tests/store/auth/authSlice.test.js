import { authSlice, checkingCredentials, login, logout } from '../../../src/store/auth/authSlice';
import { authState, deAuthState, demoUser, initialState } from '../../fixtures/authFixtures';

describe('Pruebas en el AuthSlice', () => {
  xtest("should regresar el estado inicial y llamarse 'auth'", () => {
    const state = authSlice.reducer(initialState, {});

    expect(state).toEqual(initialState);
    expect(authSlice.name).toBe('auth');
  });

  xtest('should realizar la autenticación', () => {
    const state = authSlice.reducer(initialState, login(demoUser));

    expect(state).toEqual({
      status: 'authenticated',
      uid: demoUser.uid,
      email: demoUser.email,
      displayName: demoUser.displayName,
      photoURL: demoUser.photoURL,
      errorMessage: null,
    });
  });

  xtest('should realizar el logout without args', () => {
    const state = authSlice.reducer(authState, logout());
    expect(state).toEqual({
      status: 'not-authenticated',
      uid: null,
      email: null,
      displayName: null,
      photoURL: null,
      errorMessage: undefined,
    });
  });

  xtest('should realizar el logout with args', () => {
    const errorMessage = 'Credenciales no son correctas';
    const state = authSlice.reducer(authState, logout({ errorMessage }));

    expect(state).toEqual({
      status: 'not-authenticated',
      uid: null,
      email: null,
      displayName: null,
      photoURL: null,
      errorMessage,
    });
  });

  xtest('should realizar el checkingCredentials', () => {
    const state = authSlice.reducer(authState, checkingCredentials());
    expect(state.status).toBe('checking');
  });
});
