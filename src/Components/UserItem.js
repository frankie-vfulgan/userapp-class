import React from "react";

function UserItem(props) {
    return (
        <div className="row">
            <div className="col-md-3">{props.user.username}</div>
            <div className="col-md-3">{props.user.email}</div>
            <div className="col-md-2">{props.user.country}</div>
            <div className="col-md-4">
                <button>Update</button>
                <button>Delete</button>
            </div>
        </div>
    );
}

export default UserItem;