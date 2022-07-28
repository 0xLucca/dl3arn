import styled from "styled-components";

export const Container = styled.div`
  main {
    display: grid;
    grid-template-columns: 15rem 1fr;
    min-height: 100vh;

    .videos {
      list-style: none;
      background-color: #efefef;
      .video {
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
