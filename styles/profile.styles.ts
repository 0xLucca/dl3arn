import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  flex-flow: column;
  gap: 2rem;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 0;

  form {
    display: flex;
    flex-flow: column;
    gap: 0.5rem;

    .inputs {
      display: flex;
      flex-flow: column;
      gap: 0.25rem;
    }
    .btn {
      width: max-content;
    }
  }
`;
