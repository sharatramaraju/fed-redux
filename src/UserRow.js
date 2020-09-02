import React from 'react';

const outputRows = (userList, level, userEmailUpdater, userNameUpdater) => userList.map((user, index) => 
  <tr key={index}>
    <td>{user.name}</td>
    <td>
        {/* this is now a controlled form */}
        <input 
          type="text" 
          value={user.name}
          onChange={
            function (event) {
              userNameUpdater(
                index, 
                event.target.value, // document.getElementById(`nameInput${level}${index}`).value,
                level
              );
            }
          }
        />
    </td>
    <td>{user.email}</td>
    <td>
        <input 
          id={`emailInput${level}${index}`} 
          type="text" 
          value={user.email}
          onChange={
            function (event) {
              userEmailUpdater(
                index, 
                event.target.value,
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
</>;

export default UserRow;
