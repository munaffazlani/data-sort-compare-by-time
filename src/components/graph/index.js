import React from 'react'
import "./graph.scss"

export default function ({passedWidth, name, style}) {
    const graphLineStyle = {
        width: `${passedWidth}px`,
        height: '40px',
        backgroundColor: 'green',
        marginTop: '5px'
    }

    return (
        <div className="graph-container" style={style}>
            <div id="image-container">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTZm7qlI4thyc4Y1TuBCEjvBxN8KDgppkbydA&usqp=CAU" alt="img" />
                <p>{name}</p>
            </div>
            <div style={graphLineStyle}>
                
            </div>
        </div>
    )
}
