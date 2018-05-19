import React, { Component } from "react";
import styled from "react-emotion";
import { spacing } from "utils/variables";
import Modal from "components/Modal";
import Button from "components/Button";

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

class Home extends Component {
  constructor() {
    super();
    this.state = {
      isModalShown: false
    };
    this.handleToggleModal = this.handleToggleModal.bind(this);
  }

  handleToggleModal() {
    this.setState(state => ({ isModalShown: !state.isModalShown }));
  }

  render() {
    return (
      <Grid>
        <Main>
          Main side rendered
          <Modal
            isModalShown={this.state.isModalShown}
            handleToggleModal={this.handleToggleModal}
          >
            Butts
          </Modal>
        </Main>
        <Sidebar>
          <Button onClick={this.handleToggleModal}>Toggle Button</Button>
        </Sidebar>
      </Grid>
    );
  }
}

export default Home;
