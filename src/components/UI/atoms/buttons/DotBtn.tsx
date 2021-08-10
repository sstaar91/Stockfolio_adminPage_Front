import React from "react";
import styled from "styled-components";

const Dot = styled.div`
  position: relative;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({ theme }) => theme.color.BgGrey};
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    top: -6px;
    left: -6px;
    width: 20px;
    height: 20px;
    border: ${({ theme }) => `1px solid ${theme.color.Main}`};
    border-radius: 50%;
  }
`;

function DotBtn(): JSX.Element {
  return <Dot />;
}

export default DotBtn;
