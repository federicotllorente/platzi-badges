import React, { Component } from 'react';

import inputFile from '../img/input_file.svg';

class BadgeForm extends Component {
    // state = {}
    // handleChange = e => {
    //     // console.log({
    //     //     name: e.target.name,
    //     //     value: e.target.value
    //     // });
    //     this.setState({
    //         [e.target.name]: e.target.value,
    //     });
    // }
    handleClick = e => {
        // console.log('Hey!!');
    }
    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state);
    }
    render() {
        return (
            <div className="BadgeForm">
                <h1>New attendant</h1>
                <form action="" onSubmit={this.handleSubmit}>
                    <label htmlFor="fname">First name</label>
                    <input onChange={this.props.onChange} type="text" name="fname" id="fname" value={this.props.formValues.fname} />
                    <label htmlFor="lname">Last name</label>
                    <input onChange={this.props.onChange} type="text" name="lname" id="lname" value={this.props.formValues.lname} />
                    <hr />
                    <label htmlFor="email">Email</label>
                    <input onChange={this.props.onChange} type="email" name="email" id="email" value={this.props.formValues.email} />
                    <label htmlFor="jtitle">Job title</label>
                    <input onChange={this.props.onChange} type="text" name="jtitle" id="jtitle" value={this.props.formValues.jtitle} />
                    <label htmlFor="twitter">Twitter</label>
                    <input onChange={this.props.onChange} type="text" name="twitter" id="twitter" value={this.props.formValues.twitter} />
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