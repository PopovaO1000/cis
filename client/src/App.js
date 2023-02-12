// import logo from './logo.svg';
// import './App.css';
import axios from "axios";

const auth = async () => {
  let returnVal;
  axios.defaults.withCredentials = true;
  await axios.post('http://localhost:5000/users/create')
      .then((res) => {
        if (res.data.message) {
          returnVal = true;
          alert(res.data.message);
        }
      })
      .catch((err) => {
        returnVal = true;
        alert("Ошибка соединения");
      });
  return returnVal;
}

function App() {
  return (
    <div className="App">
      <input type="submit" onClick={() => auth()} value="Войти"/>
    </div>
  );
}

export default App;
