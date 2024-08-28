import "./App.css";
import StatefulGreetingWithPrevState from "./components/StatefulGreetingWithPrevState";

function App() {
  return (
    <div className="App">
      <StatefulGreetingWithPrevState greeting="I'm a stateful class component!" />
    </div>
  );
}

export default App;
