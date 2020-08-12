import React from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ email: "", password: "" });
  };
  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className='sign-in'>
        <h2 className='title'>I already have an account</h2>{" "}
        <span>Sign in with your email and password</span>
        <form action='' onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            value={this.state.email}
            type='email'
            handleChange={this.handleChange}
            label='Email'
            required
          />

          <FormInput
            name='password'
            value={this.state.password}
            type='password'
            handleChange={this.handleChange}
            label='Password'
            required
          />

          <CustomButton type='submit'> Sign In </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
