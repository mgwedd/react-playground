import React, { Component } from 'react';
import './RegistrationForm.css'

export default class RegistrationForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '', 
            password: '',
            repeatPassword: '', 
            nameValid: false,
            passwordValid: false,
            passwordMatch: false,
            formValid: false,
            validationMessages: {
                name: '',
                password: '',
                repeatPassword: ''
            }
    }
    updateName = ( name ) => {
        this.setState({ name });
    }

    updatePassword = ( password ) => {
        this.setState({ password });
    }

    updateRepeatPassword = ( repeatPassword ) => {
        this.setState({ repeatPassword });
    }

    handleSubmit( submitEvent ) {
        submitEvent.preventDefault();
        const { name, password, repeatPassword } = this.state;
        console.log('Name: ', name);
        console.log('Password: ', password);
        console.log('Repeat Password: ', repeatPassword);
        // potentially submit these values to the server here
    }

    render(){
        return (
            <>
                <div className="registration_form_container">
                    <form 
                        className="registration__form" 
                        onSubmit={submitEvent => this.handleSubmit( submitEvent )}> 
                        <legend><h2>Register</h2></legend>
                        <div className="registration__hint">* required field</div>  
                        <div className="form-group">
                            <label htmlFor="name">Name *</label>
                            <input 
                                type="text" 
                                className="registration__control"
                                name="name" 
                                id="name"  
                                defaultValue="Frank"
                                onChange={ keyEvent => this.updateName( keyEvent.target.value )} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password *</label>
                                <input 
                                    type="password" 
                                    className="registration__control"
                                    name="password" 
                                    id="password"
                                    onChange={ keyEvent => this.updatePassword( keyEvent.target.value )} />
                            <div className="registration__hint">6 to 72 characters, must include a number</div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="repeatPassword">Repeat Password *</label>
                            <input 
                            type="password" 
                            className="registration__control"
                            name="repeatPassword" 
                            id="repeatPassword"
                            onChange={ keyEvent => this.updateRepeatPassword( keyEvent.target.value )} />
                        </div>

                        <div className="registration__button__group">
                            <button type="reset" className="registration__button">
                                Cancel
                            </button>
                            <button type="submit" className="registration__button">
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </>
        );
    }
}