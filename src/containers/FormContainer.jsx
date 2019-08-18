import React, {Component} from "react";
import ReactDOM from 'react-dom';
import SimpleReactValidator from 'simple-react-validator';

/* Import Components */
import CheckBox from "../components/CheckBox";
import Input from "../components/Input";
import TextArea from "../components/TextArea";
import Select from "../components/Select";
import Button from "../components/Button";
import EmailInput from "../components/EmailInput";
import DatePickerInput from "../components/DatePicker";
import RadioButton from "../components/RadioButton";

class FormContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newUser: {
                email: "",
                school: "",
                dateReferral: undefined,
                name: "",
                dateBirth: undefined,
                schoolYear: "",
                gender: "",
                address1: "",
                address2: "",
                address3: "",
                address4: "",
                postcode: "",
                pupilMobileNo: "",
                pupilStruggles: "",
                importantEvents: "",
                personSupported: [],
                detailsServices: "",
                personLookedAfter: [],
                skills: [],
                freeSchoolMeals: [],
                riskAssociated: [],
                referralReason: "",
                referrerName: "",
                referrerRelationship: "",
                referrerContactInfo: "",
                pupilConsent: [],
                additionalComments: "",
                riskDetail: "",
                riskAwareness: ""
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
                "Five(Scotland only)", "Six(Scotland only)"],

            radioOptions: ["Yes", "No"],
            riskAssociatedOptions: ["Yes", "No", "Maybe"],
            pupilConsent: ["Yes"]

        };

        this.validator = new SimpleReactValidator({locale: 'en'});

        this.handleAdditionalComments = this.handleAdditionalComments.bind(this);
        this.handlePupilName = this.handlePupilName.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleClearForm = this.handleClearForm.bind(this);
        this.handleCheckBox = this.handleCheckBox.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleSchoolOption = this.handleSchoolOption.bind(this);
        this.handleEmailInput = this.handleEmailInput.bind(this);
        this.handleAddress1 = this.handleAddress1.bind(this);
        this.handleAddress2 = this.handleAddress2.bind(this);
        this.handleAddress3 = this.handleAddress3.bind(this);
        this.handleAddress4 = this.handleAddress4.bind(this);
        this.handlePostCode = this.handlePostCode.bind(this);
        this.handleDateReferralChange = this.handleDateReferralChange.bind(this);
        this.handleDateBirthChange = this.handleDateBirthChange.bind(this);
        this.handlePupilMobileNo = this.handlePupilMobileNo.bind(this);
        this.handlePupilStruggles = this.handlePupilStruggles.bind(this);
        this.handleImportantEvents = this.handleImportantEvents.bind(this);
        this.handleDetailsServices = this.handleDetailsServices.bind(this);
        this.handleReferralReason = this.handleReferralReason.bind(this);
        this.handleReferrerName = this.handleReferrerName.bind(this);
        this.handleReferrerRelationship = this.handleReferrerRelationship.bind(this);
        this.handleReferrerContactInfo = this.handleReferrerContactInfo.bind(this);
        this.handlePupilConsent = this.handlePupilConsent.bind(this);
        this.handlePersonSupported = this.handlePersonSupported.bind(this);
        this.handlePersonLookedAfter = this.handlePersonLookedAfter.bind(this);
        this.handleFreeSchoolMeals = this.handleFreeSchoolMeals.bind(this);
        this.handleRiskAssociated = this.handleRiskAssociated.bind(this);
        this.handleRiskDetail = this.handleRiskDetail.bind(this);
        this.handleRiskAwareness = this.handleRiskAwareness.bind(this);
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

    handleDateReferralChange(e) {
        let value = e;

        this.setState(
            prevState => ({
                newUser: {
                    ...prevState.newUser,
                    dateReferral: value
                }
            }),
            () => console.log(this.state.newUser)
        );
    }

    handleDateBirthChange(e) {
        let value = e;

        this.setState(
            prevState => ({
                newUser: {
                    ...prevState.newUser,
                    dateBirth: value
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

    handlePostCode(e) {
        let value = e.target.value;
        this.setState(
            prevState => ({
                newUser: {
                    ...prevState.newUser,
                    postcode: value
                }
            }),
            () => console.log(this.state.newUser)
        );
    }

    handlePupilMobileNo(e) {
        let value = e.target.value;
        this.setState(
            prevState => ({
                newUser: {
                    ...prevState.newUser,
                    pupilMobileNo: value
                }
            }),
            () => console.log(this.state.newUser)
        );
    }

    handlePupilStruggles(e) {
        let value = e.target.value;
        this.setState(
            prevState => ({
                newUser: {
                    ...prevState.newUser,
                    pupilStruggles: value
                }
            }),
            () => console.log(this.state.newUser)
        );
    }

    handleImportantEvents(e) {
        console.log("Inside handleTextArea");
        let value = e.target.value;
        this.setState(
            prevState => ({
                newUser: {
                    ...prevState.newUser,
                    importantEvents: value
                }
            }),
            () => console.log(this.state.newUser)
        );
    }

    handleDetailsServices(e) {
        console.log("Inside handleTextArea");
        let value = e.target.value;
        this.setState(
            prevState => ({
                newUser: {
                    ...prevState.newUser,
                    detailsServices: value
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

    handleSchoolOption(e) {
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

    // this works simply now improve it!
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

    handleReferralReason(e) {
        let value = e.target.value;
        this.setState(
            prevState => ({
                newUser: {
                    ...prevState.newUser,
                    referralReason: value
                }
            }),
            () => console.log(this.state.newUser)
        );
    }

    handleReferrerName(e) {
        let value = e.target.value;
        this.setState(
            prevState => ({
                newUser: {
                    ...prevState.newUser,
                    referrerName: value
                }
            }),
            () => console.log(this.state.newUser)
        );
    }

    handleReferrerRelationship(e) {
        let value = e.target.value;
        this.setState(
            prevState => ({
                newUser: {
                    ...prevState.newUser,
                    referrerRelationship: value
                }
            }),
            () => console.log(this.state.newUser)
        );
    }

    handleReferrerContactInfo(e) {
        let value = e.target.value;
        this.setState(
            prevState => ({
                newUser: {
                    ...prevState.newUser,
                    referrerContactInfo: value
                }
            }),
            () => console.log(this.state.newUser)
        );
    }

    handleAdditionalComments(e) {
        console.log("Inside handleTextArea");
        let value = e.target.value;
        this.setState(
            prevState => ({
                newUser: {
                    ...prevState.newUser,
                    additionalComments: value
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
            newUser: {...prevState.newUser, skills: newSelectionArray}
        }));
    }

    handlePersonSupported(e) {
        console.log("Inside handleTextArea");
        let value = e.target.value;
        this.setState(
            prevState => ({
                newUser: {
                    ...prevState.newUser,
                    personSupported: value
                }
            }),
            () => console.log(this.state.newUser)
        );
    }

    handlePersonLookedAfter(e) {
        console.log("Inside handleTextArea");
        let value = e.target.value;
        this.setState(
            prevState => ({
                newUser: {
                    ...prevState.newUser,
                    personLookedAfter: value
                }
            }),
            () => console.log(this.state.newUser)
        );
    }

    handleFreeSchoolMeals(e) {
        console.log("Inside handleTextArea");
        let value = e.target.value;
        this.setState(
            prevState => ({
                newUser: {
                    ...prevState.newUser,
                    freeSchoolMeals: value
                }
            }),
            () => console.log(this.state.newUser)
        );
    }

    handleRiskAssociated(e) {
        console.log("Inside handleTextArea");
        let value = e.target.value;
        this.setState(
            prevState => ({
                newUser: {
                    ...prevState.newUser,
                    riskAssociated: value
                }
            }),
            () => console.log(this.state.newUser)
        );
    }

    handlePupilConsent(e) {
        const newSelection = e.target.value;
        let newSelectionArray;

        if (this.state.newUser.pupilConsent.indexOf(newSelection) > -1) {
            newSelectionArray = this.state.newUser.pupilConsent.filter(
                s => s !== newSelection
            );
        } else {
            newSelectionArray = [...this.state.newUser.pupilConsent, newSelection];
        }

        this.setState(prevState => ({
            newUser: {...prevState.newUser, pupilConsent: newSelectionArray}
        }));
    }

    handleRiskDetail(e) {
        let value = e.target.value;
        this.setState(
            prevState => ({
                newUser: {
                    ...prevState.newUser,
                    riskDetail: value
                }
            }),
            () => console.log(this.state.newUser)
        );
    }

    handleRiskAwareness(e) {
        let value = e.target.value;
        this.setState(
            prevState => ({
                newUser: {
                    ...prevState.newUser,
                    riskAwareness: value
                }
            }),
            () => console.log(this.state.newUser)
        );
    }


    handleFormSubmit(e) {

        let userData = this.state.newUser;
        let data = JSON.stringify(userData);

        if(this.validator.allValid()) {

            //display message and name to user
            ReactDOM.render(<p>Payload: {data}</p>, document.getElementById('userInfo'));
        } else {
            this.validator.showMessages();
        }
        e.preventDefault();
    }

    // e.preventDefault();
    // let userData = this.state.newUser;
    //
    // fetch("http://example.com", {
    //   method: "POST",
    //   body: JSON.stringify(userData),
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json"
    //   }
    // }).then(response => {
    //   response.json().then(data => {
    //     console.log("Successful" + data);
    //   });
    // });
    // }

    handleClearForm(e) {
        e.preventDefault();
        this.setState({
            newUser: {
                email: "",
                school: "",
                dateReferral: undefined,
                name: "",
                dateBirth: undefined,
                schoolYear: "",
                gender: "",
                address1: "",
                address2: "",
                address3: "",
                address4: "",
                postcode: "",
                pupilMobileNo: "",
                pupilStruggles: "",
                importantEvents: "",
                personSupported: [],
                detailsServices: "",
                personLookedAfter: [],
                skills: [],
                freeSchoolMeals: [],
                riskAssociated: [],
                referralReason: "",
                referrerName: "",
                referrerRelationship: "",
                referrerContactInfo: "",
                pupilConsent: [],
                additionalComments: "",
                riskDetail: "",
                riskAwareness: ""
            }
        });
    }

    render() {

        return (

            <form className="container-fluid" onSubmit={this.handleFormSubmit}>

                <EmailInput
                    inputtype={"email"}
                    title={"Email address"}
                    name={'email'}
                    id='email'
                    value={this.state.newUser.email}
                    placeholder='Enter your email'
                    onChange={this.handleEmailInput}
                />
                {/*just to test the validation library on the control*/}
                {this.validator.message('email', this.state.newUser.email, 'required|alpha')}

                <Select
                    title={"School"}
                    name={"school"}
                    options={this.state.schoolOptions}
                    value={this.state.newUser.school}
                    placeholder={"Select School"}
                    handleChange={this.handleSchoolOption}
                />{" "}
                {/* School Selection */}

                <DatePickerInput
                    inputType={"dateReferral"}
                    name={"dateReferral"}
                    title={"Date of Referral"}
                    value={this.state.newUser.dateReferral}
                    onDayChange={this.handleDateReferralChange}
                />{" "}
                {/* Date Picker */}

                <Input
                    inputtype={"text"}
                    title={"Pupil Name"}
                    name={"name"}
                    value={this.state.newUser.name}
                    placeholder={"Enter your name"}
                    onChange={this.handleInput}
                />{" "}
                {/* Name of the user */}

                <DatePickerInput
                    inputType={"dateBirth"}
                    name={"dateBirth"}
                    title={"Date of Birth"}
                    value={this.state.newUser.dateBirth}
                    onDayChange={this.handleDateBirthChange}
                />{" "}
                {/* Date Picker */}

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
                    inputtype={"address1"}
                    name={"address1"}
                    title={"Address line 1"}
                    value={this.state.newUser.address1}
                    placeholder={"Address Line 1"}
                    onChange={this.handleAddress1}
                />{" "}
                {/* Address Line 1 */}

                <Input
                    inputtype={"address2"}
                    name={"address2"}
                    title={"Address line 2"}
                    value={this.state.newUser.address2}
                    placeholder={"Address Line 2"}
                    onChange={this.handleAddress2}
                />{" "}
                {/* Address Line 2 */}

                <Input
                    inputtype={"address3"}
                    name={"address3"}
                    title={"Address line 3"}
                    value={this.state.newUser.address3}
                    placeholder={"Address Line 3"}
                    onChange={this.handleAddress3}
                />{" "}
                {/* Address Line 3 */}

                <Input
                    inputtype={"address4"}
                    name={"address4"}
                    title={"Address line 4"}
                    value={this.state.newUser.address4}
                    placeholder={"Address Line 4"}
                    onChange={this.handleAddress4}
                />{" "}
                {/* Address Line 4 */}

                <Input
                    inputtype={"postcode"}
                    name={"postcode"}
                    title={"Post Code"}
                    value={this.state.newUser.postcode}
                    placeholder={"Postcode"}
                    onChange={this.handlePostCode}
                />{" "}
                {/* Post Code */}

                <Input
                    inputtype={"pupilMobileNo"}
                    name={"pupilMobileNo"}
                    title={"Pupil Mobile Number"}
                    value={this.state.newUser.pupilMobileNo}
                    placeholder={"Pupil Mobile Number"}
                    onChange={this.handlePupilMobileNo}
                />{" "}
                {/* Pupil Mobile Number */}

                <TextArea
                    title={"Please tell us how the pupil is struggling emotionally (e.g sad, angry, anxious, etc)"}
                    rows={5}
                    value={this.state.newUser.pupilStruggles}
                    name={"pupilStruggles"}
                    handleChange={this.handlePupilStruggles}
                    placeholder={"Enter comments here..."}
                />
                {/* Pupil Struggles */}

                <TextArea
                    title={"Any important events that have happened in the pupil's life that could be having an impact on their emotional wellbeing (e.g. beareavement, parental separation)?"}
                    rows={5}
                    value={this.state.newUser.importantEvents}
                    name={"importantEvents"}
                    handleChange={this.handleImportantEvents}
                    placeholder={"Enter comments here..."}
                />
                {/* Important Events */}

                <RadioButton
                    title={"Is the Person being supported by any other statutory service? e.g CAHMS, Social Services etc"}
                    name={"personSupported"}
                    options={this.state.radioOptions}
                    selectedOptions={this.state.newUser.personSupported}
                    handleChange={this.handlePersonSupported}
                />{" "}
                {/* Person Supported By */}

                <TextArea
                    title={"Details of services (if appropriate)"}
                    rows={1}
                    value={this.state.newUser.detailsServices}
                    name={"detailsServices"}
                    handleChange={this.handleDetailsServices}
                    placeholder={"Enter comments here..."}
                />
                {/* Detauls of Services */}

                <RadioButton
                    title={"Is the person looked after by the Authority(LAC)?"}
                    name={"personLookedAfter"}
                    options={this.state.radioOptions}
                    selectedOptions={this.state.newUser.personLookedAfter}
                    handleChange={this.handlePersonLookedAfter}
                />{" "}
                {/* Person Supported By */}

                <CheckBox
                    title={"Skills"}
                    name={"skills"}
                    options={this.state.skillOptions}
                    selectedOptions={this.state.newUser.skills}
                    handleChange={this.handleCheckBox}
                />{" "}
                {/* Skill */}

                <RadioButton
                    title={"Is the pupil being provided a free school meal?"}
                    name={"freeSchoolMeals"}
                    options={this.state.radioOptions}
                    selectedOptions={this.state.newUser.freeSchoolMeals}
                    handleChange={this.handleFreeSchoolMeals}
                />{" "}
                {/* Person Supported By */}

                <RadioButton
                    title={"Do you believe there to be a risk associated with the pupil?"}
                    name={"riskAssociated"}
                    options={this.state.riskAssociatedOptions}
                    selectedOptions={this.state.newUser.riskAssociated}
                    handleChange={this.handleRiskAssociated}
                />{" "}
                {/* Associated Risk with the pupil */}

                <Input
                    inputtype={"referralReason"}
                    name={"referralReason"}
                    title={"Reason For Referral"}
                    value={this.state.newUser.referralReason}
                    placeholder={"Reason for referral"}
                    onChange={this.handleReferralReason}
                />
                {/* Reason for Referral */}

                <Input
                    inputtype={"referrerName"}
                    name={"referrerName"}
                    title={"Referrer's Name"}
                    value={this.state.newUser.referrerName}
                    placeholder={"Name of referrer"}
                    onChange={this.handleReferrerName}
                />{" "}
                {/* Referrer's Name*/}

                <Input
                    inputtype={"referrerRelationship"}
                    name={"referrerRelationship"}
                    title={"Referrer's Relationship to pupil"}
                    value={this.state.newUser.referrerRelationship}
                    placeholder={"Referrer relationship"}
                    onChange={this.handleReferrerRelationship}
                />{" "}
                {/* Referrer's Relationship to pupil*/}

                <Input
                    inputtype={"referrerContactInfo"}
                    name={"referrerContactInfo"}
                    title={"Referrer's Contact Information"}
                    value={this.state.newUser.referrerContactInfo}
                    placeholder={"Referrer contact information"}
                    onChange={this.handleReferrerContactInfo}
                />{" "}
                {/* Referrer's Relationship to pupil*/}

                <CheckBox
                    title={"Pupil consent to counselling"}
                    name={"pupilConsent"}
                    options={this.state.pupilConsent}
                    selectedOptions={this.state.newUser.pupilConsent}
                    handleChange={this.handlePupilConsent}
                />{" "}
                {/* Pupil Consent */}

                <TextArea
                    title={"Additional Comments from referrer"}
                    rows={5}
                    value={this.state.newUser.additionalComments}
                    name={"additionalComments"}
                    handleChange={this.handleAdditionalComments}
                    placeholder={"Enter comments here..."}
                />
                {/* About you */}


                <Input
                    inputtype={"riskDetail"}
                    name={"riskDetail"}
                    title={"Please give details of the risk"}
                    value={this.state.newUser.riskDetail}
                    placeholder={"Details of risk"}
                    onChange={this.handleRiskDetail}
                />{" "}
                {/* Details of risk to pupil*/}


                <Input
                    inputtype={"riskAwareness"}
                    name={"riskAwareness"}
                    title={"If you have mentioneed risk above please give details of who is aware of the risk and any support already in place at home and in school"}
                    value={this.state.newUser.riskAwareness}
                    placeholder={"Who is aware of risk"}
                    onChange={this.handleRiskAwareness}
                />{" "}
                {/* Who is aware of risk*/}


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

                <div id="userInfo">
                    {this.state.message}
                </div>

            </form>

        );
    }
}

const buttonStyle = {
    margin: "10px 10px 10px 10px"
};

export default FormContainer;
