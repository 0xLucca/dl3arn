import styled from "styled-components";

export const Nav = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  background-color: #fff;
  height: 4.5rem;

  .verify {
    display: grid;
    place-items: center;
    height: 1.75rem;
    background-color: #000;
    color: #fff;
    font-size: 0.75rem;
  }

  .wrapper,
  .menu,
  .avatar {
    height: 100%;
  }

  .wrapper {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > a {
      font-weight: bold;
      font-size: 1.25rem;
      letter-spacing: 0.5px;
    }
  }

  .menu {
    display: flex;
    align-items: center;
    list-style: none;

    .link {
      padding: 0.5rem 0.75rem;
    }
  }
  .login {
    padding: 0.75rem 1rem;
    font-size: 0.85rem;
  }
`;
