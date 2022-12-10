import {GET, POST} from 'store/api';

export const checkEmail = email => {
  const path = 'auth/check-email';
  return POST(path, {
    email,
  });
};

export const login = user => {
  const path = '/auth/login/hien';
  return POST(path, {hien: 'yen'});
};

export const verifyEmail = email => {
  const path = '/auth/verify-email';
  return POST(path, {email});
};
