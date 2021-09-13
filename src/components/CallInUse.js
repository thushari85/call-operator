import React from 'react';
import { connect } from 'react-redux';
import history from "../history"
import '../css/CallInUse.css'
import { editCustomer, getCalls } from '../actions';
import CallInUseForm from './CallInUseForm';


class CallInUse2 extends React.Component {

    componentDidMount() {
        this.props.getCalls();
    }

    onSubmit = (formValues) => {
        this.props.editCustomer(formValues);
    }

    render() {
        return (
            <div>
            <h2>Call In Use</h2>
            <CallInUseForm 
                initialValues={this.props.call}
                onSubmit={this.onSubmit}
            />
            <button onClick={() =>  history.push('/')}>Call Completed</button>
           </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const callId = parseInt(ownProps.match.params.id);
    return {
        call: Object.values(state.calls).find(call => call.Id === callId)
    };
}

export default connect(mapStateToProps, { editCustomer, getCalls })(CallInUse2)
