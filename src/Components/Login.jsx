import React from 'react'

class Login extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(<div>
            <span>Please click login</span><br /><br />
            <button onClick = {this.onLoginClick} >Login</button>
        </div>)
    }

    onLoginClick = ()=>{
        this.props.history.push("/home")
    }
}

export default Login