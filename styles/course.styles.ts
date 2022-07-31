import styled from "styled-components";

export const Container = styled.div`
  main {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: minmax(15rem, 20rem) 1fr;
    min-height: 100vh;

    .videos {
      list-style: none;
      background-color: #efefef;

      > button {
        width: 100%;
        font-size: 1.25rem;
        font-weight: 800;
        text-align: left;
        border: none;
        padding: 1rem 1rem;
        background-color: #fff;
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

  .course-container {
    padding: 0 2rem;
    .course-name {
      font-size: 1.5rem;
    }
  }

  .loading {
    text-align: center;
    padding: 1rem;
    font-size: 2rem;
    font-weight: 600;
    height: 100%;
  }
`;
