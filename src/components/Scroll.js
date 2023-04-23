import React from 'react';

const Scroll = (props) =>{
    return (
        <div style={{overflowY: 'scroll', border: '1px solid #0ccac4', height: '910px'}}>
            {props.children}
        </div>
    )
}

export default Scroll;