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
        display: flex;
        flex-flow: row;
        align-items: center;
        justify-content: space-between;
        padding: 1rem;

        p {
          font-weight: 500;
        }
        span {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.8rem;
        }
      }
      .video.pay {
        opacity: 0.25;
      }
    }

    .course-content {
      padding: 0 1rem;
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
