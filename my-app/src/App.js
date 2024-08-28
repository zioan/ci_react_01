import "./App.css";
import EventsClass from "./components/events/EventsClass";
import EventsFunctional from "./components/events/EventsFunctional";

function App() {
  return (
    <div className="App">
      <EventsFunctional />
      <EventsClass />
    </div>
  );
}

export default App;
