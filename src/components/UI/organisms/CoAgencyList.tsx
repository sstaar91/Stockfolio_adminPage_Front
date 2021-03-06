import React from "react";
import styled from "styled-components";

import CoAgenciesItem from "../molecules/CoAgenciesItem";
import Heading2 from "../atoms/texts/Heading2";

import coAgencies from "../../../assets/data/coAgencies";

const Box = styled.section`
  margin: 400px 0;
  padding: 50px 0;
  text-align: center;
  background-color: #fbfbfb;
  width: 200%;
  height: 300px;
  transform: translate(-25%);
`;

const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 115px;
`;

function CoAgencyList(): JSX.Element {
  return (
    <Box>
      <Heading2 fontWeight={700} fontSize={24}>
        다양한 협력기관과 함께 합니다.
      </Heading2>
      <List>
        {coAgencies.map(li => (
          <CoAgenciesItem
            key={li.imgAlt}
            imgAlt={li.imgAlt}
            imgSrc={li.imgSrc}
          />
        ))}
      </List>
    </Box>
  );
}

export default CoAgencyList;
