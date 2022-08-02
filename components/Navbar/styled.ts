import styled from "styled-components";

export const Nav = styled.nav`
  position: relative;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  background-color: #fff;
  height: var(--nav-size);

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

export const Verify = styled.button`
  position: absolute;
  bottom: 7vh;
  left: 50%;

  transform: translate(-50%, 0);

  display: flex;
  gap: 1rem;
  align-items: center;
  background-color: var(--dark);
  color: #fff;
  font-size: 0.95rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  padding: 1rem 2rem;
  border-radius: 9999px;
`;
