import './App.css';
import Profile from './Profile.js'

const Person={
  name: "Amey",
  theme: {
    backgroundColor: 'black',
    color: 'white'
  }
}

function App() {
  return (
    <div style={Person.theme}>
        <h1>HEllo</h1>
        <h6>{Person.name}</h6>
        <Profile/>
        <ul>
          <li>Lorem ipsum</li>
          <li>Lorem ipsum</li>
        </ul>
    </div>
  );
}

export default App;
