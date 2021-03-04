import React, { Component } from 'react';
import Modal from "../Components/Modal";
import axios from "axios";

export default class Home extends Component {
    
    state = {
        issues:[]
    }
    componentDidMount = async () => {
        //make API call here
        let response = await axios.get("/api/getIssues");
        
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
