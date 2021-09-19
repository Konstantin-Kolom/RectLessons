import { PageTitle } from 'components/PageTitle/PageTitle';
import { EventBoard } from 'components/EventBoard/EventBoard';
import upcommingEvents from '../bd/cord.json';

export const App = () => {
  return (
    <>
      <PageTitle text="События" />
      <EventBoard events={upcommingEvents} />
    </>
  );
};
