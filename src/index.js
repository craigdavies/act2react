import React, { Component } from "react";
import { render } from "react-dom";
import FormContainer from "./containers/FormContainer";
import Footer from "./components/Footer";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends Component {
  render() {
    return (
      <div className="col-md-6">
        <h3> ACT 2 - SCHOOLS FORM </h3>
        <FormContainer />
        <Footer />
      </div>

    );
  }
}

render(<App />, document.getElementById("root"));
