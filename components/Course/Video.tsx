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
  border-radius: 0;
  border: none;
  background-color: transparent;
  width: 100%;
  display: flex;
  flex-flow: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1rem;
  gap: 0.5rem;

  .name {
    width: 100%;
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
        opacity: 0.25;
      }
    `}

  ${({ selected }) =>
    selected &&
    css`
      opacity: 1;
      background-color: #000;
      color: #fff;
    `}
`;

function Video({ selected, video, onClick }: Props) {
  const userHasNFT = false;
  if (!video) return null;

  const blocked = !video.free && !userHasNFT;
  return (
    <Container selected={selected} blocked={blocked} onClick={onClick}>
      {blocked && <HiLockClosed size={20} />}
      <p className="name">{video.name}</p>
      <span className="duration">
        {video.duration}
        <ClockIcon />
      </span>
    </Container>
  );
}

export default Video;
