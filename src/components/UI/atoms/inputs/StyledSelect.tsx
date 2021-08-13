import React from "react";
import styled from "styled-components";
import {
  DataItemProps,
  InputWidthProps,
} from "../../../../models/ApplicationInterfaces";
import theme from "../../../../styles/theme";

interface StyleProps {
  quantity: number;
}

const Box = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-top: 24px;
  width: ${({ itemWidth }: InputWidthProps) => `${itemWidth}%`};
`;

const Title = styled.span`
  font-size: 14px;
  line-height: 22px;
  color: ${theme.color.descMedium};
  font-weight: 700;
`;

const SelectSection = styled.div`
  position: relative;
  margin-top: 6px;
  padding: 16px;
  height: 54px;
  background: url("./images/selectArrow.png") no-repeat,
    ${theme.color.lilacLight};
  background-position: 90% 50%;
  border-radius: 8px;
  font-size: 14px;
  color: ${theme.color.black};
  cursor: pointer;
`;

const DefaultOption = styled.span`
  display: inline-block;
  margin-top: 3px;
  color: ${theme.color.grey1};
`;

const OptionList = styled.ul`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 268px;
  border-radius: 8px;
  box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.25);
  display: none;
`;

const Option = styled.li`
  display: flex;
  align-items: center;
  padding-left: 20px;
  height: ${({ quantity }: StyleProps) => `${100 / quantity}%`};
  background: ${theme.color.white};
  border-radius: 8px;
  font-size: 12px;
  color: ${theme.color.black};
  cursor: pointer;
`;

const StyledSelect = ({
  name,
  placeholder,
  title,
  options,
  itemWidth,
}: DataItemProps): JSX.Element => {
  return (
    <Box itemWidth={itemWidth}>
      <Title>{title}</Title>
      <SelectSection data-name={name}>
        <DefaultOption>{placeholder}</DefaultOption>
        <OptionList>
          {options &&
            options.map(option => (
              <Option quantity={options.length} key={option} value={option}>
                {option}
              </Option>
            ))}
        </OptionList>
      </SelectSection>
    </Box>
  );
};

export default StyledSelect;
