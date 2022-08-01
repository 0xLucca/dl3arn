import { HiLockClosed } from "react-icons/hi";
import styled, { css } from "styled-components";
import { ClockIcon } from "utils/icons";
import { VideoSafeProps } from "utils/types/video";

interface Props {
  video: VideoSafeProps | null;
  onClick(): any;
  selected: boolean;
}

interface StyleProps {
  selected: boolean;
  blocked: boolean;
}
const Container = styled.button<StyleProps>`
  background-color: transparent;
  border-radius: 0;
  border: none;
  position: relative;
  transform: scale(100%) translate(0, 0);
  transition: transform 0.25s;
  width: 100%;

  ::before {
    background-color: #0000;
    content: "";
    height: 100%;
    right: 0;
    position: absolute;
    top: 0;
    width: 100%;
    transition: width 0.25s;
  }

  > div {
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    gap: 0.5rem;
  }

  .icon {
    transform: translate(0, 1px);
  }
  .name {
    width: 100%;
    font-size: 0.85rem;
    font-weight: 500;
    text-align: left;
  }
  .duration {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    font-size: 0.8rem;
    min-width: max-content;
  }

  ${({ blocked }) =>
    blocked &&
    css`
      .name,
      .duration {
        opacity: 0.5;
      }
    `}

  ${({ selected }) =>
    selected &&
    css`
      transform: scale(102%) translate(1%, 0);

      ::before {
        background-color: var(--primary);
        color: var(--primary-contrast);
        width: 100%;
        box-shadow: 0 10px 15px -8px var(--primary);
      }

      .name,
      .duration,
      .icon {
        opacity: 1;
        z-index: 2;
      }

      color: #fff;
    `}
`;

function Video({ selected, video, onClick }: Props) {
  const userHasNFT = false;
  if (!video) return null;

  const blocked = !video.free && !userHasNFT;
  return (
    <Container selected={selected} blocked={blocked} onClick={onClick}>
      <div>
        {blocked && <HiLockClosed size="1.5rem" className="icon" />}
        <p className="name">{video.name}</p>
        <span className="duration">
          {video.duration}
          <ClockIcon />
        </span>
      </div>
    </Container>
  );
}

export default Video;
