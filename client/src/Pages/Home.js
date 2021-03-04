import React, { PureComponent } from 'react';
import axios from "axios";
import ReactPaginate from "react-paginate";
import Table from "../Components/Table";

export default class Home extends PureComponent {

    state = {
        offset: 0,
        tableData: [],
        originalData: [],
        perPage: 10,
        currentPage: 0
    }

    handlePageClick = (e) => {
        
        const selectedPage = e.selected; //starts at 0
        const offset = selectedPage * this.state.perPage; // ex: if 2nd page selected, it would be 1 * 10
        console.log(offset)
        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.loadMoreData()
        });

    };

    loadMoreData = () => {
        const data = this.state.originalData;
        const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
        this.setState({
            pageCount: Math.ceil(data.length / this.state.perPage),
            tableData: slice
        })
        console.log("Page Count", this.state.pageCount)

    }


    componentDidMount = async () => {
        //make API call here
        let response = await axios.get("http://localhost:3000/api/getIssues");
        let allIssues = response.data;

        // this determines how many entries will be displayed on the page
        let slice = allIssues.slice(this.state.offset, this.state.offset + this.state.perPage);

        //page count = total number of items divided by desired items per page.
        this.setState({
            pageCount: Math.ceil(allIssues.length / this.state.perPage),
            originalData: allIssues,
            tableData: slice,

        });
    }

    render() {
        return (
            <div id="bodyData">
                <Table data={this.state} />
                <div id="paginate">
                    <ReactPaginate
                        previousLabel={"←"}
                        nextLabel={"→"}
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
            </div>
        );
    }
}
