import React from 'react';
import { Button, Container } from '@material-ui/core';
import 'fontsource-roboto';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import MuiPhoneNumber from 'material-ui-phone-number';
import axios from 'axios';
import ReCAPTCHA from "react-google-recaptcha";

// axios.defaults.withCredentials = true;


export default class RequestForm extends React.Component {

    state = {
        email: false,
        sms: false,
        phone: "",
        emailAddress: "",
        acceptedPrivacy: false,
        captcha: false,
        form_visible: true,
        waiting_visible: false,
        sent_visible: false,
        message: "Jetzt Teilnahmecode anfordern!"
    };

    handleChange = (event) => {
        this.setState({ ...this.state, [event.target.name]: event.target.checked });
    }

    handleChangePhone = (value) => {
        this.setState({ ...this.state, 'phone': value });
    }

    handleChangeText = (event) => {
        this.setState({ ...this.state, [event.target.name]: event.target.value });
    }

    onSubmitCaptcha = (value) => {
        console.log(value);
        this.setState({ ...this.state, 'captcha': value })
    }

    handleFormSubmit = (event) => {
        // if (!(this.state.emailAddress.includes("@stud.hs-heilbronn.de") || this.state.emailAddress.includes("@hs-heilbronn.de"))) {
        //     return;
        // }
        this.setState({ ...this.state, 'message': "Bitte Warten." });
        this.setState({ ...this.state, 'waiting_visible': true });
        this.setState({ ...this.state, 'form_visible': false });
        this.forceUpdate();
        event.preventDefault();

        var params = new URLSearchParams();
        params.append('email', this.state.email);
        params.append('sms', this.state.sms);
        params.append('phone', this.state.phone);
        params.append('emailAddress', this.state.emailAddress);
        params.append('captcha', this.state.captcha);
        axios.post('https://backend.id.stei.ml/send',
            params, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }).then((response) => {
            this.setState({ ...this.state, 'message': "Code versendet." });

        })
            .catch((error) => {
                this.setState({ ...this.state, 'message': "Es ist ein Fehler aufgetreten. Bitte Versuchen sie es später erneut." });
            });
    }

    render() {
        return (
            <Container>
                <h3>{ this.state.message }</h3>
                { this.state.form_visible ?
                <FormControl component="fieldset">
                    <FormLabel component="legend">Empfangsmethode</FormLabel>
                    <FormGroup>
                        <FormGroup>
                            <FormControlLabel
                                control={<Checkbox checked={this.state.email} onChange={this.handleChange} name="email" />}
                                label="E-Mail"
                            />
                            <TextField disabled={!this.state.email} id="standard-basic" label="E-Mail" name="emailAddress" onKeyUp={this.handleChangeText} />
                        </FormGroup>
                        <FormGroup>
                            <FormControlLabel
                                control={<Checkbox checked={this.state.sms} onChange={this.handleChange} name="sms" disabled/>}
                                label="SMS"
                            />
                            <MuiPhoneNumber disabled={!this.state.sms} defaultCountry={'de'} onChange={this.handleChangePhone} />
                        </FormGroup>
                    </FormGroup>
                    <FormControlLabel
                        control={<Checkbox checked={this.state.acceptedPrivacy} onChange={this.handleChange} name="acceptedPrivacy" />}
                        label="Ich habe die Datenschutzerklärung gelesen und verstanden."
                    />
                    <FormHelperText>Durch Anfordern des Codes bestätigen sie, dass sie die Datenschutz Hinweise gelesen haben. Falls sie bereits einen Code angefordert hatten, benutzen sie bitte die gleiche E-Mail Adresse oder Telefonnummer um ihren existierenden Code erneut zu erhalten.</FormHelperText>
                    <ReCAPTCHA
                        sitekey="6Lc33tMZAAAAABLinsP0Q-kJwG2oLwL27gaXXifP"
                        onChange={this.onSubmitCaptcha}
                    />

                    <Button variant="contained" onClick={e => this.handleFormSubmit(e)} color="primary" disabled={(!this.state.email && !this.state.sms) || !this.state.captcha || !this.state.acceptedPrivacy}>Code Anfordern</Button>
                </FormControl>
                : null}
                {this.state.waiting_visible ? <div>
                    Please wait...
                </div>
                : null}
            </Container>
        );
    }

}