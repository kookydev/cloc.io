import React, {Component} from 'react';
import UserRow from './UserRow';

class ViewEditUsers extends Component {
    constructor(props) {
        super(props);
    
    this.state = {
        users: [ 
            {id:'123', name: 'john',username:'john1',password:1234},
            {id:'456', name: 'peter',username:'peter1',password:5678},
            {id:'789', name: 'jill',username:'jill1',password:'abcd'}
          ],
        }
    }
    addUser = () => { 
        let users = Object.assign([], this.state.users);
        let newUser = {id:'',username:'',name:'' ,password: ''}
        users.push(newUser)
         this.setState({users:users})
        
      }
        
      deleteUser = (index, e) => {
        const users = Object.assign([], this.state.users); // object.assign takes state
        // and create referens not duplicate array 
        users.splice(index, 1);//splice  removes 1 user 
        this.setState({users:users})
      }
      changeName = (id, e ) => { 
        const index = this.state.users.findIndex((user) =>{
          return user.name === id 
        });
        
        const user = Object.assign({}, this.state.users[index]);
        
        user.name = e.target.value;
        
        const users = Object.assign([], this.state.users);
        
        users[index] = user;
        this.setState({users:users});
        }
      changeUserName = (id, e ) => { 
      const index = this.state.users.findIndex((user) =>{
        return user.username === id 
      });
      
      const user = Object.assign({}, this.state.users[index]);
      
      user.username = e.target.value;
      
      const users = Object.assign([], this.state.users);
      
      users[index] = user;
      this.setState({users:users});
      }
      changeId = (id, e ) => { 
        const index = this.state.users.findIndex((user) =>{
          return user.id === id 
        });
        
        const user = Object.assign({}, this.state.users[index]);
        
        user.id= e.target.value;
        
        const users = this.state.users;
        
        users[index] = user;
        this.setState({users:users});
        }

        render () {
            return (  
                <div className="vieweditusers">
                <ul>
                {
                   this.state.users.map((user, index) =>{
                   return (<UserRow 
                   name={user.name}
                   username={user.username}
                   id={user.id}
                   changeName={this.changeName.bind(this, user.name)}
                   changeUserName={this.changeUserName.bind(this, user.username)}
                   changeId={this.changeId.bind(this, user.id)}
                   delEvent={this.deleteUser.bind(this, index)}
                   key={index}
                   >{user.name}</UserRow>)
        
                  })
                }
                  </ul>
                  <button onClick={this.addUser}>Add User</button>
               </div>
            );
        }
      }

 
export default ViewEditUsers;
