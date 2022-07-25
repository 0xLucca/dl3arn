import styled from "styled-components";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  height: 3rem;

  .wrapper,
  .menu,
  .avatar {
    height: 100%;
  }

  .wrapper {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .avatar {
    display: flex;
    align-items: center;
    .image {
      height: 2.5rem;
      width: 2.5rem;
      border-radius: 0.25rem;
      background-color: #0002;
    }
  }
`;
function Navbar() {
  return (
    <Nav>
      <div className="wrapper">
        <p>DL3arn</p>

        <div className="menu">
          <div className="avatar">
            <span className="image" />
          </div>
        </div>
      </div>
    </Nav>
  );
}

export default Navbar;
