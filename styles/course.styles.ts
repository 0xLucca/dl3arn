import styled from "styled-components";

export const Container = styled.div`
  main {
    display: grid;
    grid-template-columns: minmax(15rem, 20rem) 1fr;
    margin: 0 auto;
    max-width: 1200px;
    min-height: 100vh;

    .videos {
      background-color: #efefef;

      > button {
        background-color: #fff;
        border: none;
        font-size: 1.25rem;
        font-weight: 800;
        padding: 1rem 1rem;
        text-align: left;
        width: 100%;
      }
    }

    .course-content {
      .data {
        border-bottom: 1px solid #00000020;
        padding: 1rem 1rem;
      }
      .instructor {
        font-size: 0.85rem;
        opacity: 0.5;
      }
      .description {
        font-size: 1rem;
        letter-spacing: 0.25px;
        line-height: 1.75rem;
        padding: 1rem 0 0 0;
      }
    }
  }

  .course-container {
    padding: 0 2rem;

    .course-name {
      font-size: 1.5rem;
    }
  }

  .loading {
    font-size: 2rem;
    font-weight: 600;
    height: 100%;
    padding: 1rem;
    text-align: center;
  }
`;
