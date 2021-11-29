import React from 'react';
import {Link} from "react-router-dom";
const Moviegrid = (props) => {
    return (
        <div className="moviegrid">
        <Link to={"/info/"+props.id}><img src={props.picture} width={350} height={300} alt=""></img></Link>
            <h2>{props.name}</h2>
            <p>Saison 1</p>
        </div>
    );
}

export default Moviegrid;
