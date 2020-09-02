import React from 'react';
import UserRow from './UserRow.js';

const UserTable = (props) => <>
  <table 
    border="1" 
    cellSpacing="1" 
    cellPadding="4"
  >
    <thead>
      <tr>
        <th>Name</th>
        <th>Edit Name</th>
        <th>Email</th>
        <th>Edit Email</th>
      </tr>
    </thead>
    <tbody>
      <UserRow 
        userList={props.level1} 
        level="1" 
        userEmailUpdater={props.userEmailUpdater}
        userNameUpdater={props.userNameUpdater}
      />
      <UserRow 
        userList={props.level2} 
        level="2" 
        userEmailUpdater={props.userEmailUpdater} 
        userNameUpdater={props.userNameUpdater}
      />
    </tbody>
  </table>
  <button onClick={() => {
    props.stateUpdaterFunction('updated from child');
  }}>update parent state variable</button>
</>;

export default UserTable;
