import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../api/auth';

export const singUp = createAsyncThunk(
  'auth/singUp',
  async (data, { rejectWidthValue }) => {
    try {
      const result = await api.singUp(data);
      return result;
    } catch ({ responce }) {
      return rejectWidthValue(responce.data);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/logIn',
  async (data, { rejectWidthValue }) => {
    try {
      const result = await api.logIn(data);
      return result;
    } catch ({ responce }) {
      return rejectWidthValue(responce.data);
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logOut',
  async (_, { rejectWidthValue }) => {
    try {
      const result = await api.logOut();
      return result;
    } catch ({ responce }) {
      return rejectWidthValue(responce.data);
    }
  }
);

export const current = createAsyncThunk(
  'auth/current',
  async (_, { rejectWidthValue, getState }) => {
    try {
      const { auth } = getState();
      const result = await api.getCurrent(auth.token);
      return result;
    } catch ({ responce }) {
      return rejectWidthValue(responce.data);
    }
  },
  {
    condition: (_, { getState }) => {
      const { auth } = getState();
      if (!auth.token) {
        return false;
      }
    },
  }
);
