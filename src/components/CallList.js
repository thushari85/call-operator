import React from 'react';
import { connect } from 'react-redux';
import { getCalls } from '../actions';
import { Link } from 'react-router-dom';

import '../css/CallList.css';

class CallList extends React.Component {
    state = {
        selectedRow: -1,
        callsToDisplay: null,
        selectedId: -1
    };

    // componentDidMount() {
    //     this.props.getCalls();
    // }

    search = (status, callType, fromDate, toDate) => {
        const from = fromDate && new Date(fromDate);
        const to = toDate && new Date(toDate);
       
        var filteredCalls = this.props.calls.filter(x => 
            x.Status.toLowerCase() === status.toLowerCase() && 
            x.CallType.toLowerCase() === callType.toLowerCase());
        
        if(fromDate) {
            filteredCalls = filteredCalls.filter(x => new Date(x.DateSold) > from);
        }

        if(toDate) {
            filteredCalls = filteredCalls.filter(x => new Date(x.DateSold) < to);
        }

        this.setState({callsToDisplay : filteredCalls});
    };

    render()
    {
        const callList = this.state.callsToDisplay ? this.state.callsToDisplay : this.props.calls;
        return (
            <div>
                <h2>Call List</h2>
                <select id='callType'>
                    <option value='Sales'>Sales</option>
                    <option value='Service'>Service</option>
                </select>
                <label>Date sold</label>
                <input id='fromDate' type='date'/>
                <label>to</label>
                <input id='ToDate' type='date'/>
                <select id='status'>
                    <option value='New'>New</option>
                    <option value='In Use'>In Use</option>
                    <option value='Completed'>Completed</option>
                </select>
                <button 
                    onClick={
                        () => this.search(
                            document.getElementById('status').value, 
                            document.getElementById('callType').value,
                            document.getElementById('fromDate').value,
                            document.getElementById('ToDate').value
                        )}
                >
                    Search
                </button>
                <br/>
                <br/>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Date Sold</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                       {callList && callList.length > 0 && callList.map((call, i) => 
                           <tr 
                            id={call.id}
                            key={i}
                            className={this.state.selectedRow === i ? 'selected': ''} 
                            onClick={() => this.setState({ selectedRow: i, selectedId: call.Id})}
                            >
                               <td>{call.Title + ' ' + call.FirstName + ' ' + call.Surname}</td>
                               <td>{call.DateSold}</td>
                               <td>{call.Status}</td>
                           </tr>
                       )}
                    </tbody>
                </table>
                <br/>
                <br/>
                <Link className='linkButton' to={`/call/${this.state.selectedId}`}>Make Call</Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        calls: Object.values(state.calls)
    };
}

export default connect(mapStateToProps, { getCalls })(CallList);