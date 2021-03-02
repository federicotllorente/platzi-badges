import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import inputFile from '../img/input_file.svg';

class BadgeForm extends Component {
    render() {
        return (
            <div className="BadgeForm">
                <h1>New attendant</h1>
                <form action="" onSubmit={this.props.onSubmit}>
                    <label htmlFor="fname">First name <span className="required_input">(required)</span></label>
                    <input required onChange={this.props.onChange} type="text" name="fname" id="fname" value={this.props.formValues.fname} />
                    <label htmlFor="lname">Last name <span className="required_input">(required)</span></label>
                    <input required onChange={this.props.onChange} type="text" name="lname" id="lname" value={this.props.formValues.lname} />
                    <hr />
                    <label htmlFor="email">Email <span className="required_input">(required)</span></label>
                    <input required onChange={this.props.onChange} type="email" name="email" id="email" value={this.props.formValues.email} />
                    <label htmlFor="jtitle">Job title <span className="required_input">(required)</span></label>
                    <input required onChange={this.props.onChange} type="text" name="jtitle" id="jtitle" value={this.props.formValues.jtitle} />
                    <label htmlFor="twitter">Twitter</label>
                    <input onChange={this.props.onChange} type="text" name="twitter" id="twitter" value={this.props.formValues.twitter} />
                    <label htmlFor="ppicture" className="BadgeForm__file">
                        <img src={inputFile} alt="Upload file icon" />
                        <p>Upload profile picture</p>
                    </label>
                    <input type="file" name="ppicture" id="ppicture" />
                    <div className="BadgeForm__checkbox">
                        <input required type="checkbox" name="terms" id="terms" />
                        <p>I accept the <Link to="/terms-of-service">terms of service</Link> and the <Link to="/privacy-policy">privacy policy</Link> <span className="required_input">(required)</span></p>
                    </div>
                    <button onClick={this.handleClick} className="BadgeForm__button">Save</button>
                </form>
            </div>
        );
    }
}

export default BadgeForm;