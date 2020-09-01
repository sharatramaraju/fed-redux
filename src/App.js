import React from 'react';
import './App.css';
import UserTable from './UserTable';

export default class App extends React.Component {  
  constructor(props) {
    super(props);

    this.state = {
      level1: [
        {
          email: 'sharat@g.com',
          name: 'sharat'
        }
      ],
      level2: [],
      category: "Super Users"
    }

    this.updateUserEmail = this.updateUserEmail.bind(this);
    // this.updateUserName = this.updateUserName.bind(this);
  }

  // updateUserProperty(index, newValue, level, propName) {
  //   const levelToUpdate = 'level'+level;
  //   const newLevel = [ ...this.state[levelToUpdate] ];
  //   newLevel[index][propName] = newValue; 
 
  //   this.setState({
  //     [levelToUpdate]: newLevel
  //   });
  // }

  updateUserEmail(index, newValue, level) {
    const levelToUpdate = 'level'+level;
    const newLevel = [ ...this.state[levelToUpdate] ];
    newLevel[index].email = newValue; 
 
    this.setState({
      [levelToUpdate]: newLevel
    });
  }

  //updateUserName (index, newValue, level) {
  updateUserName = (index, newValue, level) => {
    const levelToUpdate = 'level'+level;
    const newLevel = [ ...this.state[levelToUpdate] ];
    newLevel[index].name = newValue;
 
    this.setState({
      [levelToUpdate]: newLevel
    });
  }

  changeCategory = (newCategory) => {
    this.setState({
      category: newCategory
    });
  }

  componentDidMount() {
    fetch('https://gorest.co.in/public-api/users')
    .then((response) => response.json())
    .then((json) => {

      const level1Users = json.data.slice(0, 5);
      const level2Users = json.data.slice(5, 10);

      this.setState({
        level1: level1Users,
        level2: level2Users
      });

    });
  }

  render() {
    return (
      <>
        <p style={{color: 'red'}}>
          User Category: {this.state.category}
        </p>
        <p>
          <button onClick={() => {
            this.changeCategory('Mega Super Users');
          }}>
            update local state variable
          </button>
        </p>

        {
          (this.state.level1.length > 0) ?
            <UserTable 
              level1={this.state.level1} 
              level2={this.state.level2} 
              stateUpdaterFunction={this.changeCategory}
              userEmailUpdater={this.updateUserEmail}
              userNameUpdater={this.updateUserName}
            /> : 
            <p>no data to display</p>
        }
      </>
    );
  }
}
