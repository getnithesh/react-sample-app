import React from 'react'

class HomePage extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(<div>
            <span>Welcome to home page</span> <br /><br />
            <button onClick = {this.onLogoutClick} >Logout</button>
        </div>)
    }

    onLogoutClick = ()=>{
        this.props.history.push("/")
    }
}

export default HomePage