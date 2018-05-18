import React from "react";
import styled from "react-emotion";
import { spacing } from "utils/variables";

const Grid = styled("div")`
  display: grid;
  grid-template-columns: auto 25%;
  padding: ${spacing.sm};
`;

const Main = styled("div")`
  grid-column: 1;
`;

const Sidebar = styled("div")`
  grid-column: 2;
`;

const Home = () => (
  <Grid>
    <Main>Main side rendered</Main>
    <Sidebar>Sidebar rendered</Sidebar>
  </Grid>
);

export default Home;
