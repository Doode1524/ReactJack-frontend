import React, { Component } from "react";
import { connect } from "react-redux";
import { shuffleDeck, drawTwoCards } from "../actions";
import Draw from "./Draw";
import { Link } from "react-router-dom";

export class Welcome extends Component {
  componentDidMount() {
    this.props.shuffleDeck();
  }

  render() {
    return (
      <div className="cards-div">
        <h1>Welcome! Click to get started!</h1>
        <Link to="/play" className="button">
          Start
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    deckId: state.deckId,
  };
};

export default connect(mapStateToProps, { shuffleDeck, drawTwoCards })(Welcome);
