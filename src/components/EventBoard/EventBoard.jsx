import PropTypes from 'prop-types';

import s from './EventBoard.module.css';
import { EventCard } from 'components/EventCard/EventCard';

export const EventBoard = ({ events }) => {
  return (
    <div className={s.eventBoard}>
      {events.map(event => (
        <EventCard
          key={event.name}
          name={event.name}
          location={event.location}
          speaker={event.speaker}
          type={event.type}
          start={event.time.start}
          end={event.time.end}
        />
      ))}
    </div>
  );
};

EventBoard.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      speaker: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      time: {
        start: PropTypes.string.isRequired,
        end: PropTypes.string.isRequired,
      },
    }),
  ),
};
