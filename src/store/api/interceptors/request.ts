import type { InternalAxiosRequestConfig } from "axios";

export const requestResolve = (config: InternalAxiosRequestConfig<any>) => {
  const headers = config?.headers || {};
  // This way we can add token or any other data to all authorized headers without to need add them manually on each request
  headers["Content-Type"] = "application/json";

  return config;
};

export const requestReject = (error: any) => {
  return Promise.reject(error);
};
