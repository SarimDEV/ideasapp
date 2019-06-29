import React from 'react';
import '../semantic/semantic.min.css';

function FormEntry(props) {
    return (

        <div class="column">
            <h4 class="ui top attached block header">Submit a New Idea!</h4>
            <div class="ui bottom attached segment">
                <form class="ui form">
                    <div class="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name" value={props.data.name} onChange={props.handleChange} />
                    </div>
                    <div class="field">
                        <label>Idea Title</label>
                        <input type="text" name="title" placeholder="Title" value={props.data.title} onChange={props.handleChange} />
                    </div>
                    <div class="field">
                        <label>Description</label>
                        <textarea rows="2" name="body" value={props.data.body} onChange={props.handleChange}></textarea>
                    </div>
                    <div class="field">
                        <label>Password</label>
                        <input type="password" placeholder="Secret code" name="secretCode" value={props.data.secretCode} onChange={props.handleChange} />
                    </div>
                </form>
                <button class="ui button" onClick={props.handleSubmit} style={{ marginTop: "1rem" }}>Submit</button>
            </div >
        </div >

    )
}


export default FormEntry