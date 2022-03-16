import React, { useState } from "react";
import AddUser from "./Components/User/AddUser";
import UserList from "./Components/UserList/UserList";

const data = [
  {
    id: 51,
    name: "lokesh",
    age: 21,
  },
  {
    id: 52,
    name: "krish",
    age: 11,
  },
  {
    id: 53,
    name: "loki",
    age: 26,
  },
];

function App() {
  const [usersList, setUsersList] = useState(data);

  const addNewUserHandler = (name, age) => {
    // data.push(user);
    const id = Math.floor(Math.random() * 20);
    setUsersList((prev) => {
      return [...prev, { id, name, age }];
    });
  };

  return (
    <div>
      <AddUser addUser={addNewUserHandler} />
      <UserList users={usersList} />
    </div>
  );
}

export default App;
