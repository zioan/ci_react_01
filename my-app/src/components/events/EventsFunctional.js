//rfce
import React from "react";

function EventsFunctional() {
  function clickHandler() {
    console.log("Button clicked - functional component");
  }

  return (
    <div>
      <button onClick={clickHandler}>Click me - functional component</button>
    </div>
  );
}

export default EventsFunctional;
