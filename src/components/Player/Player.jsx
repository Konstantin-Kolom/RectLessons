import { useEffect, useState } from 'react';
// import ReactPlayer from 'react-player';
import { PlayerWrapper, StyledPlayer } from '../Player/Player.style';

export const Player = ({ url }) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const showLoader = url && !isVideoLoaded;
  const playerWidth = isVideoLoaded ? '50%' : 0;
  const playerHeight = isVideoLoaded ? '50%' : 0;

  useEffect(() => {
    if (url) {
      setIsVideoLoaded(false);
    }
  }, [url]);

  return (
    <PlayerWrapper>
      {showLoader && <h2>Загружаем...</h2>}
      {url && (
        <StyledPlayer
          url={url}
          width={playerWidth}
          height={playerHeight}
          onReady={() => {
            setIsVideoLoaded(true);
          }}
          controls
        />
      )}
    </PlayerWrapper>
  );
};
