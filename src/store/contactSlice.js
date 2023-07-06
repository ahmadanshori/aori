import {createSlice} from '@reduxjs/toolkit';

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

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    setContact(state, action) {
      state.data = action.payload;
    },
    setContactSelected(state, action) {
      state.contactSelected = action.payload;
    },
    setSearchContact(state, action) {
      state.searchData = action.payload;
    },
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
    setRefreshLoading(state, action) {
      state.isRefresh = action.payload;
    },
    resetContactId(state) {
      state.contactSelected = {
        id: '',
        firstName: '',
        lastName: '',
        age: '',
        photo: '',
      };
    },
  },
});

export const {
  setContact,
  setContactSelected,
  setSearchContact,
  setLoading,
  setRefreshLoading,
  resetContactId,
} = contactSlice.actions;

export default contactSlice.reducer;
