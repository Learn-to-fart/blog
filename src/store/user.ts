import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { signUp as signUpRequest, signIn as signInRequest } from '@/service/modules/user';

type User = {
  userName: string;
  passWord: string;
  email?: string;
};

export const userSignUp = createAsyncThunk('user/signUp', async (payload: User) => {
  try {
    return await signUpRequest(payload);
  } catch (e) {
    throw new Error();
  }
});

export const userSignIn = createAsyncThunk('user/signIn', async (payload: User) => {
  try {
    return await signInRequest(payload);
  } catch (e) {
    throw new Error();
  }
});

// 文章的Slice
export const user = createSlice({
  name: 'user',
  initialState: {
    userInfo: {}
  },
  reducers: {
    updated: (state: any, { payload }): void => {
      state[payload.type] = payload.param;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(userSignUp.fulfilled, (state, { payload }: any): void => {
      localStorage.setItem('userInfo', JSON.stringify(payload.data.data));
      localStorage.setItem('token', payload.data.data.token);
      state.userInfo = payload.data.data;
    });
  }
});

// 导出加减方法
export const { updated } = user.actions;

// 暴露reducer
export default user.reducer;
