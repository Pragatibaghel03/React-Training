import React from 'react';

const Cell = function (props) {

console.log('ID - '+props.id);
    const label = props.value || "_";

    const style = {
        color: props.value ? "black" : "transparent",
        cursor: props.value ? "not-allowed" : "pointer",
        cursor: props.shoulddisable ? "not-allowed" : "pointer"
    }

    return(props.shoulddisable  ? <button style={style}
        className='cell'>
        {label}
    </button>:
        <button style={style} onClick={() => props.onMove(props.id)}
        className='cell'>
        {label}
    </button>
    );
};




export default Cell;
