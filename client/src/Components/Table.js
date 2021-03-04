import React from 'react'

export default function Table(props) {
    function handleClick(data) {
        console.log(data)
    }
    return (
        <React.Fragment>
            <table border="1">
                <thead>
                    <th>Title</th>
                    <th>Issue Number</th>
                    <th>State</th>
                </thead>
                <tbody>
                    {
                        props.data.tableData.map((issue, i) => (
                            <tr onClick={() => handleClick(issue)}>
                                <td><button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target={"#test1"+i}>{issue.title}</button></td>
                                <td>{issue.number}</td>
                                <td>{issue.state}</td>

                                <div class="modal fade" id={"test1"+i} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel">More Information about Issue Number {issue.number} </h5>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                <ul>
                                                    <li>Issue Id: {issue.id}</li>
                                                    <li>Node Id: {issue.node_id}</li>
                                                    <li>Created At: {issue.created_at}</li>
                                                    <li>Updated At: {issue.updated_at}</li>
                                                    <li>Notes: {issue.body}</li>
                                                    <li>Full Description Here: <a>{issue.url}</a></li>
                                                </ul>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                <button type="button" class="btn btn-primary">Save changes</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </tr>

                        ))
                    }

                </tbody>
            </table>
        </React.Fragment>
    )
}
