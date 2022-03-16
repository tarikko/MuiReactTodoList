import React from 'react';

let NumKeys = (props) => {

    let num_keys = []
  
    for(let i = 0; i < 10; i++) {
      num_keys.push(<button className='NumKeys' key={i} value={i} onClick={props.onClick}>{i}</button>);
    }

    let zero = num_keys.shift()
    num_keys.push(zero)

return <div className="a">{num_keys}</div>

}

export default NumKeys;