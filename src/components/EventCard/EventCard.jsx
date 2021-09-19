import PropTypes from 'prop-types';
import { FaMapMarkerAlt, FaUserAlt, FaCalendarAlt, FaClock } from 'react-icons/fa';

import s from './EventCard.module.css';

export const EventCard = ({ name, location, speaker, type, start, end }) => {
  return (
    <div className={s.event}>
      <h2 className={s.title}>{name}</h2>
      <p className={s.info}>
        <FaMapMarkerAlt className={s.icon} size={16} color="red" />
        {location}
      </p>
      <p className={s.info}>
        <FaUserAlt className={s.icon} />
        {speaker}
      </p>
      <p className={s.info}>
        <FaCalendarAlt className={s.icon} />
        {start}
      </p>

      <p className={s.info}>
        <FaClock className={s.icon} color="green" />
        Duration
      </p>
      {/* <span className={s.chip}>Event type</span> */}
    </div>
  );
};

EventCard.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
};
