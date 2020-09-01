import React from 'react';
import './App.css';
import UserTable from './UserTable';

export default class App extends React.Component {  
  
  constructor(props) {
    super(props);

    this.state = {
      level1: [
        // {
        //   name: 'Rod',
        //   email: 'rod@abc.com'
        // },
        // {
        //   name: 'Dave',
        //   email: 'dave@def.com'
        // }
      ],
      level2: [
        // {
        //   name: 'Bill',
        //   email: 'bill@abc.com'
        // },
        // {
        //   name: 'Bob',
        //   email: 'bob@def.com'
        // }
      ],
      category: "Super Users"
    }

    this.updateUserEmail = this.updateUserEmail.bind(this);
  }

  updateUserEmail(index, newEmailAddress, level) {

    console.log(index);
    console.log(newEmailAddress);
    console.log(level);

    const levelToUpdate = 'level'+level;

    const newLevel = [ ...this.state[levelToUpdate] ];
    newLevel[index].email = newEmailAddress; 
 
    this.setState({
      [levelToUpdate]: newLevel
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

  changeCategory = (newCategory) => {
    this.setState({
      category: newCategory
    });
  }


  render() {
    return (
      <>
        <p>
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
            /> : 
            <p>no data to display</p>
        }

        <p>basic html</p>
      </>
    );
  }
}
