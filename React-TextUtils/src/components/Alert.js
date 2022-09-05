import React from 'react'

function Alert(props) {
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        <div style={{height:"50px"}}>
            {props.myalert && <div className={`alert alert-${props.myalert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitalize(props.myalert.type)}</strong>: {props.myalert.msg}
            </div>}
        </div>
    )
}

export default Alert