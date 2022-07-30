import styled from "styled-components";

export const Container = styled.div`
  main {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 15rem 1fr;
    min-height: 100vh;

    .videos {
      list-style: none;
      background-color: #efefef;

      h2 {
        font-size: 1.25rem;
        padding: 0.5rem 1rem;
        background-color: #0000000e;
      }

      .video {
        border-radius: 0;
        border: none;
        background-color: transparent;
        width: 100%;
        display: flex;
        flex-flow: row;
        align-items: flex-start;
        justify-content: space-between;
        padding: 1rem;

        p {
          font-weight: 500;
          text-align: left;
        }
        span {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.8rem;
          min-width: max-content;
        }
      }
      .video.pay {
        opacity: 0.25;
      }
      .video.highlight {
        opacity: 1;
        background-color: #000;
        color: #fff;
      }
    }

    .course-content {
      .data {
        padding: 1rem 1rem;
        border-bottom: 1px solid #00000020;
      }
      .instructor {
        font-size: 0.85rem;
        opacity: 0.5;
      }
      .description {
        padding: 1rem 0 0 0;
        line-height: 1.75rem;
        letter-spacing: 0.25px;
        font-size: 1rem;
      }
    }
  }
`;
