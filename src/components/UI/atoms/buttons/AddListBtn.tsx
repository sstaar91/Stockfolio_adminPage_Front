import React from "react";
import styled from "styled-components";
import { ChildrenProps } from "../../../../models/commonInterfaces";

import theme from "../../../../styles/theme";

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 0 100px;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Img = styled.img`
  font-size: 0;
`;

const Text = styled.span`
  padding-left: 8px;
  font-size: 14px;
  color: ${theme.color.blue};
`;

const AddListBtn = ({
  children,
  onClick,
}: React.ButtonHTMLAttributes<HTMLButtonElement> &
  ChildrenProps): JSX.Element => {
  return (
    <Box>
      <Button onClick={onClick}>
        <Img src="/images/addList.png" alt="추가하기" />
        <Text>{children} 추가</Text>
      </Button>
    </Box>
  );
};

export default AddListBtn;
