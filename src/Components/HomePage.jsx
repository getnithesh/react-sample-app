import React from 'react'

class HomePage extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        debugger;
        return(<div>
            <span>Welcome to home page</span> &nbsp;&nbsp;
            <span style = {{color: "green"}}>{this.props.history.location.state.userName} </span><br /><br />
            <button onClick = {this.onLogoutClick} >Logout</button>
        </div>)
    }

    onLogoutClick = ()=>{
        this.props.history.push("/")
    }
}

export default HomePage