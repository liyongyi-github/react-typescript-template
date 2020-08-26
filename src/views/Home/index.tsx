import React from 'react';
import { Link } from 'react-router-dom';
export default class Home extends React.Component{

    to(){
      
    }
    render(){
        return(
            <Link to='/info' onClick={this.to}>aaa</Link>
        )
    }
}