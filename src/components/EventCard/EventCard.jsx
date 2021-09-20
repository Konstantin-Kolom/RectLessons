import PropTypes from 'prop-types';
import { FaMapMarkerAlt, FaUserAlt, FaCalendarAlt, FaClock } from 'react-icons/fa';
// import { formatEventStartDate } from 'utilits/formatEventStartDate';
// import { formatEventDuration } from 'utilits/formatEventDuration';
import { formatEventStartDate, formatEventDuration } from 'utilits';
import { iconSize } from 'constans';

import s from './EventCard.module.css';
// import { fromUnixTime } from 'date-fns';

export const EventCard = ({ name, location, speaker, type, start, end }) => {
  const formattedStart = formatEventStartDate(start);
  const duration = formatEventDuration(start, end);

  // console.log(s);
  //   console.log(s[type]);

  return (
    <div className={s.event}>
      <h2 className={s.title}>{name}</h2>
      <p className={s.info}>
        <FaMapMarkerAlt className={s.icon} size={iconSize.sm} color="red" />
        {location}
      </p>
      <p className={s.info}>
        <FaUserAlt className={s.icon} size={16} />
        {speaker}
      </p>
      <p className={s.info}>
        <FaCalendarAlt className={s.icon} />
        {formattedStart}
      </p>

      <p className={s.info}>
        <FaClock className={s.icon} color="green" />
        {duration}
      </p>
      <span className={`${s.chip} ${s[type]}`}>{type}</span>
    </div>
  );
};

// free | vip | paid;

EventCard.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
};
