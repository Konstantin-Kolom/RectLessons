import { PageTitle } from 'components/PageTitle/PageTitle';
import { EventBoard } from 'components/EventBoard/EventBoard';
import upcommingEvents from '../bd/cord.json';
/////////////////
import { Collabsible } from 'components/Collabsible/Collabsible';
import { Tooltip } from 'components/Tooltip/Tooltip';
import { DropdownMenu } from 'components/DropdownMenu/DropdownMenu';
import { DropdownMenuT } from 'components/DropdownMenu/DropdownMenuT';
import { DropdownMenuItem } from 'components/DropdownMenu/DropdownMenuItem';
import { AiOutlineFolderOpen } from 'react-icons/ai';

import { VideoList } from 'components/VideoList/VideoList';
import { Player } from 'components/Player/Player';
import videos from '../bd/videos.json';

import { useEffect, useState } from 'react';

export const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  //   const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const selectVideo = link => {
    setSelectedVideo(link);
  };

  useEffect(() => {});

  return (
    <>
      <PageTitle text="События" />
      <EventBoard events={upcommingEvents} />
      <hr />

      <div>
        <Collabsible>Контент 1</Collabsible>
        <Collabsible>Контент 2</Collabsible>

        <Tooltip label="Есть Тууултип)">
          <button type="button">Кнопка с тултипом</button>
        </Tooltip>
        <hr />

        <div>
          <DropdownMenu />

          <DropdownMenuT>
            <DropdownMenuItem>
              <AiOutlineFolderOpen />
              Open 1
            </DropdownMenuItem>
            <DropdownMenuItem>Open 2</DropdownMenuItem>
          </DropdownMenuT>
        </div>
      </div>
      <hr />

      <div>
        <h1>Selected video: {selectedVideo}</h1>
        <VideoList videos={videos} onSelect={selectVideo} />
        <Player url={selectedVideo} />
      </div>
    </>
  );
};
