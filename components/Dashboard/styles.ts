import styled from "styled-components";

export const Container = styled.article`
  display: flex;
  flex-flow: column;
  gap: 1rem;

  padding: 1rem;
  background-color: #0000000a;
  border-radius: 0.25rem;

  header {
    position: relative;
    display: block;
    width: 100%;
    height: 10rem;

    .img {
      object-fit: cover;
      border-radius: 0.25rem;
    }
  }

  footer {
    .info {
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
        > * {
          gap: 0.5rem;
          display: flex;
          align-items: center;
          flex-flow: row-reverse;
        }
      }
    }
    .btn {
      margin: 1rem 0 0 0;
      font-size: 0.8rem;
    }
  }

  :first-child {
    align-items: center;
    flex-flow: row;
    grid-area: 1 / 1 / 2 / 3;

    header {
      width: 100%;
      height: 100%;

      .img {
        object-fit: cover;
        border-radius: 0.25rem;
      }
    }

    footer {
      display: flex;
      flex-flow: column;
      justify-content: space-between;
      width: 100%;
      height: 100%;

      .info {
        flex-flow: column;
        align-items: flex-start;
        .name {
          font-size: 2rem;
          font-weight: 800;
          letter-spacing: 2px;
        }
        .meta {
          flex-flow: row;
          gap: 1rem;
          font-weight: 500;
          margin: 0.25rem 0;
          > * {
            flex-flow: row;
          }
        }
      }
      .description {
        position: relative;
        max-height: calc(1.25rem * 5);
        line-height: 1.25rem;
        letter-spacing: 1px;
        font-weight: 300;
        font-size: 0.9rem;
        text-overflow: ellipsis;
        overflow-y: scroll;
        padding: 0 0.5rem 0.5rem 0;
        word-wrap: break-word;
      }
    }
  }
`;
