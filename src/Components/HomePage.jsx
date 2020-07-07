import React from 'react';
import UserTable from './UserTable/UserTable';
import {getAllUsers} from '../actions/index';
import { connect } from 'react-redux';

class HomePage extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        debugger;
        console.log(this.props.state.fetchUsers)
        return(<div>
            <span>Welcome to home page</span> &nbsp;&nbsp;
            <span style = {{color: "green"}}>{this.props.history.location.state.userName} </span><br /><br />
            <button onClick = {this.onLogoutClick} >{'Logout'}</button>
            <UserTable userData = {this.props.state.fetchUsers}/>
        </div>)
    }

    onLogoutClick = ()=>{
        this.props.history.push("/")
    }

    componentDidMount () {
        this.props.getAllUsers()
    }
}

const mapStateToProps = state => {return {state}}
export default connect(mapStateToProps, { getAllUsers })(HomePage)
