import React, { Component } from 'react';

class HomeComponent extends Component {

    registerUser=()=>{
        this.props.history.push(`/signup`);
    }

    displayAllUser=()=>{
        this.props.history.push(`/displayallrecord`);
    }

    render() { 
        return <div>
            <button onClick={()=>this.registerUser()}>Sign Up</button>
            <button onClick={()=>this.displayAllUser()}>Display All Information</button>
        </div>;
    }
}
 
export default HomeComponent;