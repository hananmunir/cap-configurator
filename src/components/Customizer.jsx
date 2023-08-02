import React, {useState} from "react";

const App = () => {
  const [textFrontLeft, setTextFrontLeft] = useState("");
  const [textFrontRight, setTextFrontRight] = useState("");
  const [textBack, setTextBack] = useState("");
  return (
    <div className='app-container'>
      <div className='sidebar'>
        <h2>Fonts</h2>
        <ul>
          <li>Font Name 1</li>
          <li>Font Name 2</li>
        </ul>

        <h2>Colors</h2>
        <ul>
          <li>Color 1</li>
          <li>Color 2</li>
        </ul>

        <h2>Text</h2>
        <div>
          <input type='text' placeholder='Front Left' />
          <input type='text' placeholder='Front Right' />
          <input type='text' placeholder='Back' />
        </div>
      </div>
    </div>
  );
};

export default App;
