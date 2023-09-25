import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

// 定义接口，用来规范返回数据格式
export interface ApiResponse<T> {
  code: number;
  message: string;
  data: T;
}

class Axios {
  private static instance: Axios;
  private axiosInstance: AxiosInstance;

  // 构造函数私有化，保证单例模式
  private constructor(baseURL?: string) {
    this.axiosInstance = axios.create({
      baseURL,
      timeout: 5000
    });
    // 请求拦截器，可以在请求之前做一些处理，如添加token等
    this.axiosInstance.interceptors.request.use(
      (config: any) => {
        const token = localStorage.getItem('token');
        if (token) {
          config.headers = {
            Authorization: `Token ${token}`
          };
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    // 响应拦截器，对响应结果进行统一处理
    this.axiosInstance.interceptors.response.use(
      (response) => {
        const res = response.data as ApiResponse<any>;
        if (res.code !== 0) {
          console.error(res.message);
        }
        return response.data;
      },
      (error) => {
        console.error('网络异常', error);
        return Promise.reject(error);
      }
    );
  }

  public static getInstance(baseURL?: string): Axios {
    if (!this.instance) {
      this.instance = new Axios(baseURL);
    }
    return this.instance;
  }

  public async request<T>(config: AxiosRequestConfig): Promise<T> {
    try {
      const response = await this.axiosInstance.request(config);
      return response as T;
    } catch (error) {
      throw error;
    }
  }
}

export default Axios.getInstance('http://127.0.0.1:8080');
