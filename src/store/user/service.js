import {GET, POST} from 'store/api';

export const createUser = user => {
  const path = '/user/create';
  return POST(path, {user});
};

export const login = (email, password) => {
  const path = '/user/login';
  return POST(path, {email, password});
};

export const createJob = job => {
  const path = '/job/create';
  return POST(path, {job});
};

export const updateUser = (userId, data) => {
  const path = '/user/update';
  return POST(path, {userId, data});
};

export const userDetail = userId => {
  const path = `/user/${userId}/detail`;
  return GET(path, {});
};

export const userMessage = (userId, userOtherId) => {
  const path = '/user/message';
  return GET(path, {
    userId,
    userOtherId,
  });
};

export const userSendMessage = (messageId, userId, content) => {
  const path = '/user/send-message';
  return POST(path, {
    messageId,
    userId,
    content,
  });
};

export const userDeleteMessage = messageId => {
  const path = '/user/message/delete';
  return POST(path, {
    messageId,
  });
};

export const userClearMessage = messageId => {
  const path = '/user/message/clear';
  return POST(path, {
    messageId,
  });
};

export const getAllMessage = userId => {
  const path = '/user/message/all';
  return GET(path, {
    userId,
  });
};

export const getAllUser = (searchString, skip) => {
  const path = '/user/all';
  return GET(path, {
    searchString,
    skip,
  });
};
