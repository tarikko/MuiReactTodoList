import React from 'react'

let OpsKeys1 = (props) => {

    let OpsKeys = ['/', '×', '-', '+']
    let OpsButtons = []

    for(let i = 0; i < OpsKeys.length; i++) {
        OpsButtons.push(<button className="OpsKeys OpsKeys1" key={OpsKeys[i]} value={OpsKeys[i]} onClick={props.onClick}>{OpsKeys[i]}</button>)
    }

    return <div className="c">{OpsButtons}</div>
}

let OpsKeys2 = (props) => {

    let OpsKeys = ['.', '=']
    let OpsButtons = []

    for(let i = 0; i < OpsKeys.length; i++) {
        OpsButtons.push(<button className="OpsKeys OpsKeys2" key={OpsKeys[i]} value={OpsKeys[i]} onClick={props.onClick}>{OpsKeys[i]}</button>)
    }

    return <div className="b">{OpsButtons}</div>
}

let OpsKeys3 = (props) => {

    let OpsKeys = ['AC', 'DEL']
    let OpsButtons = []

    for(let i = 0; i < OpsKeys.length; i++) {
        OpsButtons.push(<button className="OpsKeys OpsKeys3" key={OpsKeys[i]} value={OpsKeys[i]} onClick={props.onClick}>{OpsKeys[i]}</button>)
    }

    return <div className="e">{OpsButtons}</div>
}

export {OpsKeys1, OpsKeys2, OpsKeys3};