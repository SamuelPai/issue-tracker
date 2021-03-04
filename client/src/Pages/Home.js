import React, { Component } from 'react';
import Modal from "../Components/Modal";
import axios from "axios";

export default class Home extends Component {
    
    state = {
        issues:[]
    }
    componentDidMount = async () => {
        //make API call here
        let response = await axios.get("http://localhost:3000/api/getIssues");
        let allIssues = response.data;
        this.setState({issues: allIssues});
    }
    render() {
        return (
            <div>
                {this.state.issues.map((issue, index) => (
                    <h1>{issue.title}</h1>
                ))}
            </div>
        );
    }
}
