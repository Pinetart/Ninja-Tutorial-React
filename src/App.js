import "./App.css";

function App() {
  const title = "Welcome to the new blog.";
  const person = { name: "zane", age: 50 };
  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>{person.name}</p>
      </div>
    </div>
  );
}

export default App;
