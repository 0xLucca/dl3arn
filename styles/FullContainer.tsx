import { ReactNode } from "react";
import styled from "styled-components";

const Container = styled.div`
  min-height: calc(97vh - var(--nav-size));
`;

function FullContainer({ children }: { children: ReactNode }) {
  return <Container>{children}</Container>;
}

export default FullContainer;
