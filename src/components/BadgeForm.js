import React, { Component } from 'react';

import inputFile from '../img/input_file.svg';

class BadgeForm extends Component {
    state = {}
    handleChange = e => {
        // console.log({
        //     name: e.target.name,
        //     value: e.target.value
        // });
        this.setState({
            [e.target.name]: e.target.value,
        });
    }
    handleClick = e => {
        // console.log('Hey!!');
    }
    handleSubmit = e => {
        e.preventDefault();
    }
    render() {
        return (
            <div className="BadgeForm">
                <h1>New attendant</h1>
                <form action="" onSubmit={this.handleSubmit}>
                    <label htmlFor="fname">First name</label>
                    <input onChange={this.handleChange} type="text" name="fname" id="fname" />
                    <label htmlFor="lname">Last name</label>
                    <input type="text" name="lname" id="lname" />
                    <hr />
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" />
                    <label htmlFor="jtitle">Job title</label>
                    <input type="text" name="jtitle" id="jtitle" />
                    <label htmlFor="twitter">Twitter</label>
                    <input type="text" name="twitter" id="twitter" />
                    <label htmlFor="ppicture" className="BadgeForm__file">
                        <img src={inputFile} alt="Upload file icon" />
                        <p>Upload profile picture</p>
                    </label>
                    <input type="file" name="ppicture" id="ppicture" />
                    <div className="BadgeForm__checkbox">
                        <input type="checkbox" name="terms" id="terms" />
                        <p>I accept the <a href="/">terms of service</a> and the <a href="/">privacy policy</a></p>
                    </div>
                    <button onClick={this.handleClick} className="BadgeForm__button">Save</button>
                </form>
            </div>
        );
    }
}

export default BadgeForm;