import React, { Component } from "react";
import axios from "axios";
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      password_confirmation: "",
      errors: "",
    };
  }
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password, password_confirmation } = this.state;
    let user = {
      email: email,
      password: password,
      password_confirmation: password_confirmation,
    };
    axios
      .post("http://localhost:3001/users", { user }, { withCredentials: true })
      .then((response) => {
        if (response.statusText === "Created") {
          this.props.handleLogin({ user: response.data });
          this.redirect();
        } else {
          this.setState({
            errors: response.data.errors,
          });
        }
      })
      .catch((error) => console.log("api errors:", error));
  };
  redirect = () => {
    this.props.history.push("/start");
  };
  handleErrors = () => {
    return (
      <div>
        <ul>
          {this.state.errors.map((error) => {
            return <li key={error}>{error}</li>;
          })}
        </ul>
      </div>
    );
  };
  render() {
    const { email, password, password_confirmation } = this.state;
    return (
      <div className="cards-div">
        <h1>Sign Up</h1>
        <form className="form-style-7" onSubmit={this.handleSubmit}>
          <input
            placeholder="email"
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <input
            placeholder="password"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          <input
            placeholder="password confirmation"
            type="password"
            name="password_confirmation"
            value={password_confirmation}
            onChange={this.handleChange}
          />

          <button className="button" placeholder="submit" type="submit">
            Sign Up
          </button>
        </form>
        <div>{this.state.errors ? this.handleErrors() : null}</div>
      </div>
    );
  }
}
export default Signup;
