import Image from "next/image";
import styled from "styled-components";

const Container = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  flex-flow: row;
  align-items: center;
  gap: 1rem;

  .name {
    font-size: 0.9rem;
    letter-spacing: 0.5px;
  }

  .image-container {
    position: relative;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 0.25rem;
    overflow: hidden;
  }
`;

interface Props {
  img: string;
  username?: string;
  to?: "left" | "right";
  onClick?(): any;
}
function Avatar({ img, to, username, onClick }: Props) {
  const name = <span className="name">{username}</span>;
  const tag = onClick ? "button" : "div";

  return (
    <Container as={tag} onClick={onClick}>
      {(!to || to === "left") && name}

      <div className="image-container">
        <Image layout="fill" src={img} alt="" />
      </div>

      {to === "right" && name}
    </Container>
  );
}

export default Avatar;
