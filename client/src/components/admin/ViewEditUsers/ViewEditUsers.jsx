import React from 'react';

const ViewEditUsers = (props) => {
    return (  
        <div className="vieweditusers">
        <ul>
        {
           this.state.users.map((user, index) =>{
           return(<User 
           name={user.name}
           username={user.username}
           id={user.id}
           changeName={this.changeName.bind(this, user.name)}
           changeUserName={this.changeUserName.bind(this, user.username)}
           changeId={this.changeId.bind(this, user.id)}
           delEvent={this.deleteUser.bind(this, index)}
           key={index}
           >{user.name}</User>)

          })
        }
          </ul>
          <button onClick={this.addUser}>Add User</button>
          <button onClick={this.saveUsers}>Save</button>
       </div>
    );

}

 
export default ViewEditUsers;