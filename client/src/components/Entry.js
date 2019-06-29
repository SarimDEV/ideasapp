import React from 'react';
import '../semantic/semantic.min.css';
import img from '../img/llama_dribble.png';

function Entry(props) {
    return (
        <div class="item">

            <div class="content">

                <p class="header">{props.entryInfo.title}</p>

                <div class="extra">
                    <img alt="profileimg" class="ui avatar rounded image" src={img} />
                    <span>{props.entryInfo.author} | {props.entryInfo.date.split('T')[0]}</span>
                </div>

                <div class="description">
                    {props.entryInfo.body}
                </div>

            </div>

        </div>
    )
}


export default Entry