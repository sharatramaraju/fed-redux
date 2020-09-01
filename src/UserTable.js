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
        userNameUpdater={props.userNameUpdater}
        level="1" 
        userList={props.level1} 
        userEmailUpdater={props.userEmailUpdater}
      />
      <UserRow 
        userList={props.level2} 
        userNameUpdater={props.userNameUpdater}
        userEmailUpdater={props.userEmailUpdater} 
        level="2"
      />
    </tbody>
  </table>
  <button onClick={() => {
    props.stateUpdaterFunction('updated from child');
  }}>update parent state variable</button>
</>;

export default UserTable;
