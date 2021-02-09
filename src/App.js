
import './App.css';

function Header(props) {
return(
  <Header>
    <h1>{props.name} Graduate-Course</h1>
  </Header>
);
}

function Main(props) {
  return(
    <section>
      <p> Below mentioned are the list of Courses</p>
    <ul>
      {props.Topics.map((Topic) => <li>{Topic}</li>)}
    </ul>
    </section>
  );
}

const Topics = [
  "Angular JS",
  "React-Essentials",
  "C#"
]

function App() {
  return (
    <div className="App">
    <Header name = "TAL"/>
    <Main />
    <h3>Footer</h3>
    </div>
  );
}

export default App;
