import contactReducer, {
  setContact,
  setContactSelected,
  setSearchContact,
  setLoading,
  setRefreshLoading,
  resetContactId,
} from '../../src/store/contactSlice';

describe('contactSlice reducer', () => {
  const initialState = {
    isLoading: true,
    isRefresh: false,
    data: [],
    searchData: [],
    contactSelected: {
      id: '',
      firstName: '',
      lastName: '',
      age: '',
      photo: '',
    },
  };

  it('should handle setContact', () => {
    const contacts = [{id: 1, firstName: 'John'}];
    const nextState = contactReducer(initialState, setContact(contacts));
    expect(nextState.data).toEqual(contacts);
  });

  it('should handle setContactSelected', () => {
    const contact = {id: 1, firstName: 'John'};
    const nextState = contactReducer(initialState, setContactSelected(contact));
    expect(nextState.contactSelected).toEqual(contact);
  });

  it('should handle setSearchContact', () => {
    const searchResults = [{id: 1, firstName: 'John'}];
    const nextState = contactReducer(
      initialState,
      setSearchContact(searchResults),
    );
    expect(nextState.searchData).toEqual(searchResults);
  });

  it('should handle setLoading', () => {
    const nextState = contactReducer(initialState, setLoading(false));
    expect(nextState.isLoading).toBe(false);
  });

  it('should handle setRefreshLoading', () => {
    const nextState = contactReducer(initialState, setRefreshLoading(true));
    expect(nextState.isRefresh).toBe(true);
  });

  it('should handle resetContactId', () => {
    const nextState = contactReducer(initialState, resetContactId());
    expect(nextState.contactSelected).toEqual({
      id: '',
      firstName: '',
      lastName: '',
      age: '',
      photo: '',
    });
  });
});
