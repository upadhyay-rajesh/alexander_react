import React, { Component } from 'react';
import App from './App';



class App1 extends Component {

   

    state={
        name: 'Rajesh',
        password:'abc123',
        email:'abc@yahoo.com',
        address:'Salt Lake'
    }

    render() { 
        return <div>
            i am stateful component

            <App nm={this.state.name} pass={this.state.password} em={this.state.email} ad={this.state.address} />
        </div>;
    }
}
 
export default App1;