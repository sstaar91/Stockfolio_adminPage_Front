import React from "react";
import styled from "styled-components";
import { observer } from "mobx-react";

import Desc from "../atoms/texts/Desc";
import theme from "../../../styles/theme";

import { IntroduceProps } from "../../../models/landingInterfaces";
import RootStore from "../../../stores/RootStore";

import handleThemeKey from "../../../utils/handleThemeKey";

interface EventProps {
  isActive: boolean;
}

const Item = styled.li`
  position: relative;
  width: 25%;

  &::before {
    content: "";
    position: absolute;
    top: -2px;
    left: -2px;
    width: 1px;
    height: 1px;
    border: 7px solid transparent;
    border-bottom: 7px solid ${theme.color.main};
    opacity: ${({ isActive }: EventProps) => (isActive ? 1 : 0)};
    transition: opacity 0.7s ease-out;
  }
`;

const Title = styled.em`
  display: inline-block;
  margin-bottom: 38px;
  font-weight: 700;
  font-size: 18px;
  margin-left: ${({ isActive }: EventProps) => (isActive ? "24px" : 0)};
  transition: margin-left 0.7s ease-out;
`;

const IntroduceListItem = observer(({ title, desc, idx }: IntroduceProps) => {
  const { SlideStore } = RootStore();
  const isActive =
    Math.abs(SlideStore.slideSpot / SlideStore.movingUnit) === idx;

  return (
    <Item isActive={isActive}>
      <Title isActive={isActive}>{title}</Title>
      <Desc
        fontColor={
          isActive ? handleThemeKey("desc") : handleThemeKey("lightGrey")
        }
        fontSize={14}
        fontWeight={400}
        lineHeight={1.7}
      >
        {desc}
      </Desc>
    </Item>
  );
});

export default IntroduceListItem;
