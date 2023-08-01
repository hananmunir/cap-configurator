import React from "react";

const App = () => {
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
