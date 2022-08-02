import styled from "styled-components";

export const Main = styled.main`
  display: grid;
  place-items: center;
  width: 100%;
  height: 100vh;
  margin: 0 auto;

  .link {
    font-weight: 600;
    color: #5af;
  }
  > div {
    width: 481px;
  }

  .signup {
    margin: 1rem 0 0 0;
  }

  .form {
    gap: 1rem;

    &,
    .inputs {
      display: flex;
      flex-flow: column;
      width: 100%;
    }

    .inputs {
      gap: 0.5rem;
      label,
      input {
        width: 100%;
      }
    }
  }

  .container {
    display: flex;
    flex-flow: column;
    gap: 1rem;
    margin: 1rem 0;

    .separator {
      align-items: center;
      color: #0005;
      display: flex;
      font-size: 0.8rem;
      font-weight: 300;
      text-align: center;
      width: 100%;

      span {
        padding: 0 1rem;
      }

      ::before,
      ::after {
        background-color: #0003;
        content: "";
        display: block;
        height: 1px;
        position: relative;
        width: 100%;
      }
    }
  }
`;
