import React  from 'react'
 
let Display = (props) => {
    return <div className="Display"><div><h1>{props.str}</h1></div><div><h3>{props.result}</h3></div></div>
}

export default Display;