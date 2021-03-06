import React from "react";
import styled from "styled-components";

import { TextProps } from "../../../../models/commonInterfaces";

const H1 = styled.h1`
  margin: 12px 0px 60px;
  color: ${({ fontColor }: TextProps) => fontColor};
  font-size: ${({ fontSize }: TextProps) =>
    fontSize ? `${fontSize}px` : "60px"};
  font-weight: ${({ fontWeight }: TextProps) => fontWeight};
  font-weight: 700;
  line-height: 60px;
`;

function Heading1({
  children,
  fontColor,
  fontSize,
  fontWeight,
}: TextProps): JSX.Element {
  return (
    <H1 fontColor={fontColor} fontSize={fontSize} fontWeight={fontWeight}>
      {children}
    </H1>
  );
}

export default Heading1;
