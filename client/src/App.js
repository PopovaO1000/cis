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

const fileLoad = async () => {
    const form = document.querySelector("form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        axios.post("http://localhost:5000/criteria/create", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    });
}

function App() {
  return (
    <div className="App">
        {/*<form>*/}
        {/*    <h5>Создание эксперта</h5>*/}
        {/*    <input type="submit" onClick={() => auth()} value="Войти"/>*/}
        {/*</form>*/}
        <form>
            <h5>Загрузка шаблона с критериями</h5>
            <input type="text" name="title" placeholder="Введите диапазон ячеек с критериями"/>
            <input type="text" name="disc" placeholder="Введите диапазон ячеек с расшифровкой критерия"/>
            <input type="file" name="excel" encType="multipart/form-data"/>
            <input type="submit" onClick={() => fileLoad()} value="Войти"/>
        </form>
    </div>
  );
}

export default App;
