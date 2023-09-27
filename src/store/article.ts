import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getArticle as getArticleRequest } from '@/service/modules/article';

export const getArticle = createAsyncThunk('article/getArticle', async () => {
  try {
    const { data }: any = await getArticleRequest();
    return data;
  } catch (e) {
    throw new Error();
  }
});

// 文章的Slice
export const article = createSlice({
  name: 'article',
  initialState: {
    value: 0
  },
  reducers: {
    // 定义一个加的方法
    increment: (state, { payload }) => {
      getArticle();
      // state.value += parseInt(payload);
    }
  },
  extraReducers: {
    [getArticle.pending](state, action) {
      console.log('getArticle 执行中还未有结果');
    },
    [getArticle.fulfilled](state, { payload }) {
      console.log('getArticle 拿到结果了', payload);
    }
  }
});

// 导出加减方法
export const { increment } = article.actions;

// 暴露reducer
export default article.reducer;
