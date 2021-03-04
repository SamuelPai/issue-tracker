import React, { Component } from 'react';
import Modal from "../Components/Modal";
import axios from "axios";
// import ReactPaginate from "react-paginate";

export default class Home extends Component {
    
    state = {
        offset: 0,
        issues:[],
        originalData: [],
        perPage: 10,
        currentPage: 0
        
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
                <table border="1">
                     <thead>
                         <th>Title</th>
                         <th>Issue Number</th>
                         <th>State</th>
                     </thead>
                     <tbody>
                        {
                          this.state.issues.map((issue, i) => (
                                <tr>
                                    <td>{issue.title}</td>
                                    <td>{issue.number}</td>
                                    <td>{issue.state}</td>
                                </tr>
                            
                          ))
                        }

                     </tbody>
                 </table>  
                {/* {this.state.issues.map((issue, index) => (
                    <h1>{issue.title}</h1>
                ))} */}
            </div>
        );
    }
}
