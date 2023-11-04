import request from '..';

type User = {
  userName: string;
  passWord: string;
  email?: string;
};

// 登录用户
export function signIn(param: User) {
  return request.post({
    url: '/api/user/login',
    data: { user: param }
  });
}

// 注册新用户
export function signUp(param: User) {
  return request.post({
    url: '/api/user/add',
    data: { user: param }
  });
}
