import React, { Component } from "react";

/* Import Components */
import CheckBox from "../components/CheckBox";
import Input from "../components/Input";
import TextArea from "../components/TextArea";
import Select from "../components/Select";
import Button from "../components/Button";
import EmailInput from "../components/EmailInput";

class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        email: "",
        name: "",
        age: "",
        gender: "",
        address1: "",
        address2: "",
        address3: "",
        address4: "",
        skills: [],
        about: ""
      },

      schoolOptions: ["Bishopston", "Birchgrove", "Bishop Gore", "Bishop Vaughan", "Bryn Tawe",
       "Cefn Hengoed", "Dylan Thomas", "Gowerton", "Gwyr", "Morriston", "Olchfa", "Pentrehafod",
       "Penyrheol", "Pontarddulais", "KS3 - Arfyn", "KS4 - Brondeg", "Bishop Hedly", "Afon Taf",
       "Cyfarthfa High", "Pen Y Dre", "Greenfields", "EOTAS - Merthyr", " Step Ahead",
       "Inveralmond Community High School", "WLC Inclusion & Wellbeing Service", "Bathgate Academy",
       "Fallside School", "Burnhouse School", "Armadale", "Portland High School", "St.Ambrose",
       "St.Andrew's High School"],
      genderOptions: ["Male", "Female", "Non-binary", "Prefer not to say"],
      skillOptions: ["Cognition & Learning", "Behavioural, Emotional & Social Development", "Communication & Interaction", "Sensory &/or Physical"],

      schoolYear: ["Year 7", "Year 8", "Year 9", "Year 10", "Year 11", "Year 12", "Year 13",
      "First(Scotland only)", "Second(Scotland only)", "Third(Scotland only)", "Four(Scotland only)",
      "Five(Scotland only)", "Six(Scotland only)"]
    };
    this.handleTextArea = this.handleTextArea.bind(this);
    this.handleAge = this.handleAge.bind(this);
    this.handlePupilName = this.handlePupilName.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleCheckBox = this.handleCheckBox.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleEmailInput = this.handleEmailInput.bind(this);
    this.handleAddress1 = this.handleAddress1.bind(this);
    this.handleAddress2 = this.handleAddress2.bind(this);
    this.handleAddress3 = this.handleAddress3.bind(this);
    this.handleAddress4 = this.handleAddress4.bind(this);
  }

  /* This lifecycle hook gets executed when the component mounts */

  handlePupilName(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          name: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  handleAge(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          age: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  handleAddress1(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          address1: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  handleAddress2(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          address2: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  handleAddress3(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          address3: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  handleAddress4(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          address4: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          [name]: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  handleEmailInput(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          email: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  handleTextArea(e) {
    console.log("Inside handleTextArea");
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          about: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  handleCheckBox(e) {
    const newSelection = e.target.value;
    let newSelectionArray;

    if (this.state.newUser.skills.indexOf(newSelection) > -1) {
      newSelectionArray = this.state.newUser.skills.filter(
        s => s !== newSelection
      );
    } else {
      newSelectionArray = [...this.state.newUser.skills, newSelection];
    }

    this.setState(prevState => ({
      newUser: { ...prevState.newUser, skills: newSelectionArray }
    }));
  }

  handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state.newUser;

    fetch("http://example.com", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(response => {
      response.json().then(data => {
        console.log("Successful" + data);
      });
    });
  }

  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      newUser: {
        email: "",
        school: "",
        name: "",
        age: "",
        schoolYear: "",
        gender: "",
        address1: "",
        address2: "",
        address3: "",
        address4: "",
        skills: [],
        about: ""
      }
    });
  }

  render() {
    return (

      <form className="container-fluid" onSubmit={this.handleFormSubmit}>

      <EmailInput
        inputType={"email"}
        title={"Email address"}
        name={'email'}
        id='email'
        value={this.state.email}
        placeholder='Enter your email'
        onChange={this.handleEmailInput}
      />

      <Select
        title={"School"}
        name={"school"}
        options={this.state.schoolOptions}
        value={this.state.newUser.school}
        placeholder={"Select School"}
        handleChange={this.handleInput}
      />{" "}
      {/* Gender Selection */}

        <Input
          inputType={"text"}
          title={"Pupil Name"}
          name={"name"}
          value={this.state.newUser.name}
          placeholder={"Enter your name"}
          handleChange={this.handleInput}
        />{" "}
        {/* Name of the user */}
        <Input
          inputType={"number"}
          name={"age"}
          title={"Age"}
          value={this.state.newUser.age}
          placeholder={"Enter your age"}
          handleChange={this.handleAge}
        />{" "}
        {/* Age */}

        <Select
          title={"School Year"}
          name={"schoolYear"}
          options={this.state.schoolYear}
          value={this.state.newUser.schoolYear}
          placeholder={"Choose"}
          handleChange={this.handleInput}
        />{" "}
        {/* School Year Selection */}

        <Select
          title={"Gender"}
          name={"gender"}
          options={this.state.genderOptions}
          value={this.state.newUser.gender}
          placeholder={"Select Gender"}
          handleChange={this.handleInput}
        />{" "}
        {/* Gender Selection */}

        <Input
          inputType={"address1"}
          name={"address1"}
          title={"Address line 1"}
          value={this.state.newUser.address1}
          placeholder={"Address Line 1"}
          handleChange={this.handleAddress1}
        />{" "}
        {/* Address Line 1 */}

        <Input
          inputType={"address2"}
          name={"address2"}
          title={"Address line 2"}
          value={this.state.newUser.address2}
          placeholder={"Address Line 2"}
          handleChange={this.handleAddress2}
        />{" "}
        {/* Address Line 2 */}

        <Input
          inputType={"address3"}
          name={"address3"}
          title={"Address line 3"}
          value={this.state.newUser.address3}
          placeholder={"Address Line 3"}
          handleChange={this.handleAddress3}
        />{" "}
        {/* Address Line 3 */}

        <Input
          inputType={"address4"}
          name={"address4"}
          title={"Address line 4"}
          value={this.state.newUser.address4}
          placeholder={"Address Line 4"}
          handleChange={this.handleAddress4}
        />{" "}
        {/* Address Line 4 */}

        <CheckBox
          title={"Skills"}
          name={"skills"}
          options={this.state.skillOptions}
          selectedOptions={this.state.newUser.skills}
          handleChange={this.handleCheckBox}
        />{" "}
        {/* Skill */}
        <TextArea
          title={"Additional Comments from referrer"}
          rows={10}
          value={this.state.newUser.about}
          name={"currentPetInfo"}
          handleChange={this.handleTextArea}
          placeholder={"Enter comments here..."}
        />
        {/* About you */}
        <Button
          action={this.handleFormSubmit}
          type={"primary"}
          title={"Submit"}
          style={buttonStyle}
        />{" "}
        {/*Submit */}
        <Button
          action={this.handleClearForm}
          type={"secondary"}
          title={"Clear"}
          style={buttonStyle}
        />{" "}
        {/* Clear the form */}
      </form>

    );
  }
}

const buttonStyle = {
  margin: "10px 10px 10px 10px"
};

export default FormContainer;
