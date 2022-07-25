import Image from "next/image";
import styled from "styled-components";
import { PrimaryButton } from "../Buttons";

const Container = styled.article`
  padding: 1rem;
  background-color: #0000000a;
  border-radius: 0.25rem;

  header {
  }

  footer {
    .description {
      display: flex;
      flex-flow: row;
      align-items: center;
      justify-content: space-between;
      width: 100%;

      .instructor {
        font-size: 0.8rem;
        opacity: 0.25;
      }
      .meta {
        display: flex;
        flex-flow: column;
        align-items: flex-end;
      }
    }
    .btn {
      margin: 1rem 0 0 0;
      font-size: 0.8rem;
    }
  }
`;

function Card() {
  return (
    <Container>
      <header>
        <Image layout="fill" src="" alt="" />
      </header>
      <footer>
        <div className="description">
          <div>
            <h3 className="name">learn figma</h3>
            <p className="instructor">by Christopher Morgan</p>
          </div>
          <div className="meta">
            <time>6h 30min</time>
            <p>4,9</p>
          </div>
        </div>

        <PrimaryButton className="btn">View course</PrimaryButton>
      </footer>
    </Container>
  );
}

export default Card;
