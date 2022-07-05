import { startNewNote } from '../../../src/store/journal/thunks';

describe('Pruebas en Journal Thunks', () => {
  const dispatch = jest.fn();
  const getState = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test('should debe crear una nueva nota en blanco', async () => {
    const uid = 'TEST-UID';
    getState.mockReturnValue({ auth: { uid } });

    console.log(getState());

    await startNewNote()(dispatch, getState);
  }, 180000);
});
