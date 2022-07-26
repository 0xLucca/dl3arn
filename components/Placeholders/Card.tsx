import styled, { css } from "styled-components";

const Placeholder = styled.span<{ width: string; height: string }>`
  display: block;
  background-color: #0002;
  border-radius: 5px;

  ${({ width, height }) =>
    css`
      width: ${width};
      height: ${height};
    `}

  background: linear-gradient(-90deg, #aaa 50%, #ddd, #aaa 75%);
  background-size: 400% 400%;
  animation: gradient 2s linear infinite;

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-flow: column;
  gap: 1rem;

  .footer {
    display: flex;
    flex-flow: column;
    gap: 0.5rem;
  }

  .info {
    display: flex;
    width: 100%;
    height: max-content;
    gap: 1rem;

    .left,
    .right {
      width: 100%;
      display: flex;
      flex-flow: column;
      gap: 0.25rem;
    }
    .right {
      align-items: flex-end;
      justify-content: space-between;
    }
  }
`;
function CardPlaceholder() {
  return (
    <Container>
      <div>
        <Placeholder width="100%" height="9.5rem" />
      </div>
      <div className="footer">
        <div className="info">
          <div className="left">
            <Placeholder width="75%" height="1.75rem" />
            <Placeholder width="100%" height="1rem" />
          </div>
          <div className="right">
            <Placeholder width="75%" height="1rem" />
            <Placeholder width="45%" height="1rem" />
          </div>
        </div>
        <Placeholder width="100%" height="2.5rem" />
      </div>
    </Container>
  );
}

export default CardPlaceholder;
