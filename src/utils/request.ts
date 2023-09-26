import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

// 定义接口，用来规范返回数据格式
export interface ApiResponse<T> {
  code: number;
  message: string;
  data: T;
}

class Request {
  instance: AxiosInstance;

  // 构造函数私有化，保证单例模式
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config);
    // 请求拦截器，可以在请求之前做一些处理，如添加token等
    this.instance.interceptors.request.use(
      (config: any) => {
        const token = localStorage.getItem('token');
        if (!token) {
          config.headers = {
            Authorization:
              1 ||
              'Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6Imdzc2ciLCJlbWFpbCI6IjQ5MDEwNDcyMkBxcS5jb20iLCJpYXQiOjE2OTU2NTc5Njh9.ol2zla2_kDPPz_pPnmm0c1tW3vfL3NOTKcN4MzlcQf4' ||
              `Token ${token}`
          };
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    // 响应拦截器，对响应结果进行统一处理
    this.instance.interceptors.response.use(
      (response) => {
        const res = response.data as ApiResponse<any>;
        if (res.code !== 0) {
          console.error(res.message);
        }
        return response.data;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  request<T>(config: AxiosRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
          return err;
        });
    });
  }

  get<T = any>(config: AxiosRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' });
  }

  post<T = any>(config: AxiosRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' });
  }
}

export default Request;
