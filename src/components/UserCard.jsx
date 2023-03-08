import React from "react";

const UserCard = ({ userData }) => {
  return (
    <article>
      <h3>{userData.name}</h3>
      <ul>
        <li>Email: {userData.email}</li>
        <li>Age: {userData.age}</li>
        <li>Gender: {userData.gender}</li>
      </ul>
    </article>
  );
};

export default UserCard;
