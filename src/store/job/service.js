import {GET, POST} from 'store/api';

export const getHotJob = () => {
  const path = 'job/outstanding';
  return GET(path, {});
};

export const getJobDetail = id => {
  const path = `job/${id}`;
  return GET(path, {});
};

export const checkApply = (applicantId, jobId) => {
  const path = 'job/check-apply';
  return POST(path, {
    applicantId,
    jobId,
  });
};

export const checkSaved = (applicantId, jobId) => {
  const path = 'job/check-saved';
  return POST(path, {
    applicantId,
    jobId,
  });
};

export const applyJob = (applicantId, jobId) => {
  const path = 'job/apply';
  return POST(path, {
    applicantId,
    jobId,
  });
};

export const savedJob = (applicantId, jobId) => {
  const path = 'job/saved';
  return POST(path, {
    applicantId,
    jobId,
  });
};

export const myApplyJob = (userId, skip = 0) => {
  const path = `job/${userId}/my-applied`;
  return GET(path, {
    skip,
  });
};

export const myPostedJob = userId => {
  const path = `job/${userId}/my-posted`;
  return GET(path, {
    userId,
  });
};

export const mySavedJob = userId => {
  const path = `job/${userId}/my-saved`;
  return GET(path, {
    userId,
  });
};

export const removeApply = (applicantId, jobId) => {
  const path = 'job/remove-apply';
  return POST(path, {
    applicantId,
    jobId,
  });
};

export const removeSave = (applicantId, jobId) => {
  const path = 'job/remove-saved';
  return POST(path, {
    applicantId,
    jobId,
  });
};

export const removePosted = userId => {
  const path = 'job/remove-posted';
  return POST(path, {
    userId,
  });
};
export const updateJob = (jobId, job = {}) => {
  const path = 'job/update';
  return POST(path, {
    jobId,
    job,
  });
};

export const findJob = (searchString, skip) => {
  const path = 'job/find-job';
  return GET(path, {
    searchString,
    skip,
  });
};

export const listApplication = (jobId, skip) => {
  const path = 'job/list-application';
  return GET(path, {
    jobId,
    skip,
  });
};
