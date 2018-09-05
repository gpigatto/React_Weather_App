import React from 'react';

const Text = props => (
    <div>
        { props.city && <h1> {props.city} </h1>}
        { props.temp && <h2> {props.temp} ºC </h2>}
        { props.desc && <h3> {props.desc} </h3>}
    </div>
)

export default Text;