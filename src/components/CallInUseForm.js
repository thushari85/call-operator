import React from 'react';
import { Field, reduxForm } from 'redux-form';

class CallInUseForm extends React.Component {

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues)
    }

    renderInput = (fieldProps) => {
        const { 
            input, 
            label, 
            meta 
        } = fieldProps; 
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;

        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input}/>
                {this.renderError(meta)}
            </div>
        )
    }

    renderError(meta) {
        const {
            error,
            touched
        } = meta;

        if(touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">
                        {error}
                    </div>
                </div>
            )
        }
    }

    renderInputWithButton = ({input, label, buttonLabel}) => {
        return (
            <div>
                <label>{label}</label>
                <input {...input}/>
                <button type='button' onClick={() =>  window.open('tel:' + 7896)}>{buttonLabel}</button>
            </div>
        )
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name="Title" component={this.renderInput} label="Title" ></Field>
                <Field name='FirstName' label='FirstName' component={this.renderInput}></Field>
                <Field name='Surname' label='Surname' component={this.renderInput}></Field>
                <Field name='Mobile' label='Mobile' buttonLabel='Call Mobile Phone' component={this.renderInputWithButton}></Field>
                <Field name='Home' label='Home' buttonLabel='Call Home Phone' component={this.renderInputWithButton}></Field>
                <button className="ui button primary">Submit</button>
                <button type="button" onClick={this.props.reset}>Reset</button>
            </form>
        )
    }
}

const validate = (formValues) => {
    const errors = {};

    if(!formValues.Title)
        errors.Title = 'You must enter a title';
    
    if(!formValues.FirstName)
        errors.FirstName = 'You must enter a First Name';

    if(!formValues.Surname)
        errors.Surname = 'You must enter a Surname';

    if(!formValues.Mobile)
        errors.Mobile = 'You must enter a Mobile';

    if(!formValues.Home)
    errors.Home = 'You must enter a Home';

    return errors;
}

export default reduxForm({
    form: 'CallInUse',
    validate: validate
})(CallInUseForm)

