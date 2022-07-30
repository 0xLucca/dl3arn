import styled from "styled-components";

export const Container = styled.div`
  section {
    max-width: 1200px;
    margin: 0 auto;
  }

  .buttons {
    > div {
      max-width: 300px;
      margin: 1rem 0;
      display: flex;
      flex-flow: column;
      gap: 1rem;
    }
  }

  .cards {
    margin: 1rem 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem 3rem;
  }
`;
