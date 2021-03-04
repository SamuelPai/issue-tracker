import React, { PureComponent } from 'react';
import Modal from "../Components/Modal";
import axios from "axios";
import ReactPaginate from "react-paginate";

export default class Home extends PureComponent {
    
    state = {
        offset: 0,
        tableData:[],
        originalData: [],
        perPage: 10,
        currentPage: 0
        
    }

 

    componentDidMount = async () => {
        //make API call here
        let response = await axios.get("http://localhost:3000/api/getIssues");
        let allIssues = response.data;

        // this determines how many entries will be displayed on the page
        let slice = allIssues.slice(this.state.offset, this.state.offset + this.state.perPage);

        this.setState({
            pageCount: Math.ceil(allIssues.length/this.state.perPage),
            originalData: allIssues,
            tableData: slice,
            
        });
    }
    render() {
        return (
            <div>
                <table border="1">
                     <thead>
                         <th>Id</th>
                         <th>Title</th>
                         <th>Issue Number</th>
                         <th>State</th>
                     </thead>
                     <tbody>
                        {
                          this.state.tableData.map((issue, i) => (
                                <tr>
                                    <td>{i + 1}</td>
                                    <td>{issue.title}</td>
                                    <td>{issue.number}</td>
                                    <td>{issue.state}</td>
                                </tr>
                            
                          ))
                        }

                     </tbody>
                 </table>  
                
                 <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}
                />

            </div>
        );
    }
}
