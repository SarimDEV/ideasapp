import React from 'react'


function FormError(props) {
    return (
        <div class="ui negative message">
            <i class="close icon" onClick={props.handleClose}></i>
            <p>{props.errorMsg}</p>
        </div>
    )
}

export default FormError