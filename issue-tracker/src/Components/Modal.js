import React from 'react'

export default function Modal(props) {

   
    return (
        <React.Fragment>
            <div class="card text-center">
                <div class="card-header">
                    Current Issues
                </div>
                <div class="card-body">
                    <button onClick={() => props.parentCallBack} class="btn btn-primary">Get Issues</button>
                </div>
                <div class="card-footer text-muted">
                    by Sam Pai 3/3/21
                </div>
            </div>

        </React.Fragment>
    )
}
