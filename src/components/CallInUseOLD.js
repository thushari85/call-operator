import React from "react";
import { connect } from 'react-redux';
import '../css/CallInUse.css'
import history from "../history"
import { editCustomer, getCalls } from '../actions';


class CallInUseOLD extends React.Component {
    state = {
        customer: this.props.call ? this.props.call : '',
        Title: this.props.call ? this.props.call.Title : '',
        FirstName: this.props.call ? this.props.call.FirstName : '',
        Surname: this.props.call ? this.props.call.Surname : '',
        Mobile: this.props.call ? this.props.call.Mobile : '',
        Home: this.props.call ? this.props.call.Home : ''
    };

    componentDidMount() {
        this.props.getCalls();
    }

    updateCustomer = () => {
        this.props.editCustomer(
            {
                Id: parseInt(this.props.match.params.id),
                Title: this.state.Title,
                FirstName: this.state.FirstName,
                Surname: this.state.Surname,
                Mobile: this.state.Mobile,
                Home: this.state.Home
            }
        );
    }

    resetCustomer = () => {
        this.setState({
            Title: this.state.customer.Title,
            FirstName: this.state.customer.FirstName,
            Surname: this.state.customer.Surname,
            Mobile: this.state.customer.Mobile,
            Home: this.state.customer.Home
        });
    }

    callComplete = () => {
        history.push('/');
    }

    callPhone = (phoneNumber) => {
        window.open('tel:' + phoneNumber);
    }

    render(){
        return(
            <div>
                <h2>Call In Use</h2>
                <div>
                    <label>Title</label>
                    <input 
                        type="text" 
                        id="title" 
                        value = {this.state.Title}
                        onChange = { (e) => this.setState({ Title: e.target.value })}
                    >
                    </input>
                </div>
                <div>
                    <label>First Name</label>
                    <input 
                        type="text" 
                        id="firstName" 
                        value={this.state.FirstName}
                        onChange = { (e) => this.setState({ FirstName: e.target.value })}
                    >
                    </input>
                </div>
                <div>
                <label>Surname</label>
                <input 
                    type="text" 
                    id="surname"
                    value={this.state.Surname}
                    onChange = { (e) => this.setState({ Surname: e.target.value })}
                >
                </input>
                </div>
                <div>
                    <label>Mobile</label>
                    <input 
                        type="text" 
                        id="mobile" 
                        value={this.state.Mobile}
                        onChange = { (e) => this.setState({ Mobile: e.target.value })}
                    >
                    </input>
                    <button onClick={() => this.callPhone(document.getElementById('mobile').value)}>Call Mobile Phone</button>
                </div>
                <div>
                    <label>Home</label>
                    <input 
                        type="text" 
                        id="home" 
                        value={this.state.Home}
                        onChange = { (e) => this.setState({ Home: e.target.value })}
                    >
                    </input>
                    <button onClick={() => this.callPhone(document.getElementById('home').value)}>Call Home Phone</button>
                </div>
                <br/>
                <br/>
                <button onClick={this.updateCustomer}>Update</button>
                <button onClick={this.resetCustomer}>Reset</button>
                <br/>
                <button onClick={this.callComplete}>Call Completed</button>
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

export default connect(mapStateToProps, { editCustomer, getCalls })(CallInUse)