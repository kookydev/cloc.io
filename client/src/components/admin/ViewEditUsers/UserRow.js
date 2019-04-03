import React from 'react';

const user = (props) => { 
   return <ol>
        <span>name:  </span>
        <input onChange={props.changeName} value={props.name}/>
        <span> username: </span>
        <input onChange={props.changeUserName} value={props.username}/>
        <span>id: </span>
        <input onChange={props.changeId}value={props.id}/>
       <button onClick={props.delEvent}>Delete</button>
      
        </ol>
        
}

export default user;