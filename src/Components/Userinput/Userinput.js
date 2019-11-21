import React, { Component } from 'react';

class Userinput extends Component {
    render() {
        return (
            <div>
               <input type="text" placeholder="Username" minlength="10" size="40" required/><br/> 
               <input type="text" placeholder="password" minlength="10" size="40" required/> <br/>
            </div>
        );
    }
}

export default Userinput;