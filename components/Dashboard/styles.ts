import styled from "styled-components";

export const Container = styled.article`
  display: flex;
  flex-flow: column;
  gap: 1rem;

  padding: 1rem;
  background-color: #0000000a;
  border-radius: 0.25rem;

  header {
    display: block;
    width: 100%;

    .img {
      object-fit: cover;
      border-radius: 0.25rem;
    }
  }

  footer {
    .description {
      display: flex;
      flex-flow: row;
      align-items: center;
      justify-content: space-between;
      width: 100%;

      .name {
        text-transform: capitalize;
        font-size: 1.1rem;
        letter-spacing: 0.5px;
      }
      .instructor {
        font-size: 0.8rem;
        opacity: 0.4;
        font-weight: 300;
      }
      .meta {
        display: flex;
        flex-flow: column;
        align-items: flex-end;
        font-size: 0.85rem;
        opacity: 0.65;
      }
    }
    .btn {
      margin: 1rem 0 0 0;
      font-size: 0.8rem;
    }
  }
`;
