import React from "react";
import styled, { css } from "styled-components";

import { SquareBtnProps } from "../../../../models/commonInterfaces";

const Button = styled.button`
  padding: 16px 0;
  width: ${({ btnWidth }: SquareBtnProps) => `${btnWidth}px`};
  color: ${({ fontColor }: SquareBtnProps) => fontColor};
  border-radius: 8px;
  font-size: ${({ fontSize }: SquareBtnProps) => `${fontSize}px`};
  font-weight: ${({ fontWeight }: SquareBtnProps) => fontWeight};
  cursor: pointer;
  ${({ isFilled }: SquareBtnProps) =>
    (isFilled &&
      css`
        background: ${({ btnColor }: SquareBtnProps) => btnColor};
      `) ||
    (!isFilled &&
      css`
        border: ${({ btnColor }: SquareBtnProps) => `1px solid ${btnColor}`};
      `)}
`;

function SquareBtn({
  children,
  isFilled,
  btnWidth,
  btnColor,
  fontSize,
  fontColor,
  fontWeight,
}: SquareBtnProps): JSX.Element {
  return (
    <Button
      type="button"
      isFilled={isFilled}
      btnWidth={btnWidth}
      btnColor={btnColor}
      fontSize={fontSize}
      fontColor={fontColor}
      fontWeight={fontWeight}
    >
      {children}
    </Button>
  );
}

export default SquareBtn;
