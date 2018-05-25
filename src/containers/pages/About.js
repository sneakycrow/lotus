import React from "react";
import styled from "react-emotion";
import { spacing } from "utils/variables";

const Container = styled("div")`
  width: 100vw;
  padding: ${spacing.xs};
`;

const About = () => (
  <Container>
    <p>About rendered</p>
  </Container>
);

export default About;
