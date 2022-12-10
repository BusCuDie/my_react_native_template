export const responseInterceptor = response => {
  return Promise.resolve(response);
};

export const errorInterceptor = error => {
  return Promise.reject(error);
};

export const requestInterceptor = request => {
  return request;
};
