import React from 'react';

const outputRows = (userList, level, userEmailUpdater, userNameUpdater) => userList.map((user, index) => 
  <tr key={index}>
    <td>{user.name}</td>
    <td>
        {/* Controlled Form */}
        <input
          type="text" 
          value={user.name}
          onChange={
            function (event) {
              userNameUpdater(
                index, 
                event.target.value, //document.getElementById(`nameInput${level}${index}`).value,
                level
              );
            }
          }
          />
    </td>
    <td>{user.email}</td>
    <td>
        <input id={`emailInput${level}${index}`} 
          type="text" 
          value={user.email} 
          onChange={
            function (event) {
              userEmailUpdater(
                index, 
                event.target.value, //document.getElementById(`nameInput${level}${index}`).value,
                level
              );
            }
          }
        />
    </td>
  </tr>
);

const UserRow = ({level, userList, userEmailUpdater, userNameUpdater}) => <>
    <tr>
      <th colSpan="4">Level {level}</th>
    </tr>
    {
      outputRows(userList, level, userEmailUpdater, userNameUpdater)
    }
    <tr>
      <td>
        {/* <form onSubmit={ function( (event.target) {})}>
        <input type='text' value='Submit form'/>
        <input type='submit' value='Submit form'/>
        </form> */}
      </td>
    </tr>
</>;

export default UserRow;
