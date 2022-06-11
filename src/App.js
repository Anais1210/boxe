import { AddBoxeurForm } from "./AddBoxer.js";
import { BoxeurList } from "./List.js";
import React, { Component } from "react";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:9000/testAPI")
      .then((res) => res.text())
      .then((res) => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
    this.callAPI();
  }

  render() {
    return (
      <>
        <h1>Tournois de boxe</h1>
        <h2>Boxeur :</h2>
        <AddBoxeurForm defaultClassement={0} />
        <h2>Liste des boxeurs</h2>
        <BoxeurList minAge={18} maxAge={65} />
      </>
    );
  }
}
export default App;
