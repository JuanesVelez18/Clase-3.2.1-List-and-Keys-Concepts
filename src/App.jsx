import "./App.css";
import UserCard from "./components/UserCard";

const numbers = [1, 2, 3, 4, 5, 6, 6];

const users = [
  {
    id: "1117ea09-991e-450b-b166-23a81720ff68",
    name: "Juan",
    gender: "Male",
    age: 48,
    email: "juanes48@gmail.com",
  },
  {
    id: "93c63a21-c333-44d2-9288-84a2a84df200",
    name: "Rosa",
    gender: "Female",
    age: 21,
    email: "rosa21@gmail.com",
  },
  {
    id: "e0d92f4b-bbe9-4c3a-bb0e-69efe36be44f",
    name: "Luck",
    gender: "Nothing",
    age: 31,
    email: "luck31@gmail.com",
  },
];

function App() {
  return (
    <div className="App">
      {/* <ul>
        {numbers.map((number, i) => (
          <li key={i}>
            <p>
              Number is:
              <mark>{number}</mark>
            </p>
          </li>
        ))}
      </ul> */}

      <section>
        <h2>Users List</h2>
        {users.map((user) => (
          <UserCard key={user.id} userData={user} />
        ))}
      </section>
    </div>
  );
}

export default App;
