import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

export const timeFromNow = time => {
  if (time) {
    return dayjs(time).fromNow();
  }
  return '';
};
