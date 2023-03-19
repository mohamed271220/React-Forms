import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [headingText, setHeadingText] = useState("");
  const onChanging = (ev) => {
    console.log(ev.target.value);
    setName(ev.target.value);
    // console.log(ev.target.placeholder);
    // console.log(ev.target.type);
  };
  const handleSubmit = (ev) => {
    setHeadingText(name);
    ev.preventDefault();
  };
  return (
    <div className="container">
      <h1>Hello {headingText} </h1>
      <form onSubmit={handleSubmit}>
        {/* controlled component  */}
        <input
          value={name}
          onChange={onChanging}
          type="text"
          placeholder="What's your name?"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
