export const initialState = {
  status: 'checking', // not-authenticated, checking, authenticated,
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null,
};

export const authState = {
  status: 'authenticated', // not-authenticated, checking, authenticated,
  uid: '123ABC',
  email: 'anthony@test.com',
  displayName: 'Anthony Test',
  photoURL: 'https://test.com/anthony.jpg',
  errorMessage: null,
};

export const deAuthState = {
  status: 'not-authenticated', // not-authenticated, checking, authenticated,
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null,
};

export const demoUser = {
  uid: 'ABC123',
  email: 'demo@google.com',
  displayName: 'Demo User',
  photoURL: 'https://demo.co/test.png',
};
