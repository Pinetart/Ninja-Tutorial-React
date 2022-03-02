import { useState } from "react";

const Home = () => {
  const [name, setName] = useState("mario");
  const [age, setAge] = useState(25);

  const handleClick = (e) => {
    setName("Dog");
    setAge(30);
  };
  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>
        My name is {name} and I am {age} years old
      </p>
      <button onClick={handleClick}>Test</button>
    </div>
  );
};

export default Home;
