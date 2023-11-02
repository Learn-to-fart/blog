import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import article from '@/store/article';
import user from '@/store/user';
import thunk from 'redux-thunk';

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?.({ trace: true }) || compose;

// 将多个reducer合并在一起
const reducer = combineReducers({
  user,
  article
});

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export default store;
