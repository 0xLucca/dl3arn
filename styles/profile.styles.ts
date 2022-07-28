import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  flex-flow: column;
  gap: 2rem;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 0;

  .info {
    display: flex;
    align-items: center;
    gap: 1rem;

    .name {
      font-size: 1rem;
      letter-spacing: 0.5px;
    }
    .email {
      font-size: 0.9rem;
      opacity: 0.75;
    }

    .img-container {
      position: relative;
      width: 3rem;
      height: 3rem;
      border-radius: 100%;
      overflow: hidden;

      .img {
        object-fit: cover;
      }
    }
  }

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
