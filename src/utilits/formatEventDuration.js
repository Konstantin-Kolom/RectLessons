import { formatDistanceStrict } from 'date-fns';
import { ru } from 'date-fns/locale';

export const formatEventDuration = (start, end) => {
  return formatDistanceStrict(Date.parse(start), Date.parse(end), {
    locale: ru,
  });
};
