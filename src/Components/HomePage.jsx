import React from 'react'
import UserTable from './UserTable/UserTable';

class HomePage extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            userProfiles: [{isActive: true, _id: "5c4cc2109487b0003924f1e3", role: "Administrator", firstName: "Test", lastName: "Admin"}, {isActive: true, _id: "5e2cc6df7a91aaf820510a55", role: "Volunteer", firstName: "Sidd", lastName: "Test"}, {isActive: true, _id: "5ede6be453a0480017164a5b", role: "Volunteer", firstName: "Volunteer 1", lastName: "Test"}]	
        }
    }

    render(){
        debugger;
        return(<div>
            <span>Welcome to home page</span> &nbsp;&nbsp;
            <span style = {{color: "green"}}>{this.props.history.location.state.userName} </span><br /><br />
            <button onClick = {this.onLogoutClick} >Logout</button>
            <UserTable userData = {this.state.userProfiles}/>
        </div>)
    }

    onLogoutClick = ()=>{
        this.props.history.push("/")
    }
}

export default HomePage