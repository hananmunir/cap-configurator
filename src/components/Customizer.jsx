import React, { useState } from "react";
import { useColorStore } from "../Utils/store";
import { useTextStore } from "../Utils/textStore";

const Colors = [
  {
    hex: "#32CD32",
  },
  {
    hex: "#FDD401",
  },
  {
    hex: "#E8D5AA",
  },
];

const Fonts = [
  { name: "Kuano", path: "/Fonts/textType1.json" },
  { name: "Tekstaus", path: "/Fonts/textType2.json" },
  // Add more fonts if needed
];

const App = () => {
  const setActiveColor = useColorStore((state) => state.setActiveColor);

  const textFrontLeft = useTextStore((state) => state.textFrontLeft);
  const textFrontRight = useTextStore((state) => state.textFrontRight);
  const textBack = useTextStore((state) => state.textBack);

  const setFocus = useTextStore((state) => state.setFocus);
  const font = useTextStore((state) => state.font); // Get the selected font

  const handleFontChange = (event) => {
    const selectedFontPath = event.target.value;
    useTextStore.setState({ font: selectedFontPath });
  };

  return (
    <div className='app-container'>
      <div className='sidebar'>
        <h2>Fonts</h2>
        <select onChange={handleFontChange} value={font}>
          {Fonts.map((font) => (
            <option key={font.path} value={font.path}>
              {font.name}
            </option>
          ))}
        </select>

        <h2>Colors</h2>
        <ul>
          {Colors.map((color, index) => (
            <li key={index}>
              <div
                style={{
                  backgroundColor: color.hex,
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  background: color,
                }}
                onClick={() => setActiveColor(color)}
              ></div>
            </li>
          ))}
        </ul>

        <h2>Text</h2>
        <div>
          <label>Front Right</label>
          <input
            type='text'
            placeholder='Front Left'
            value={textFrontLeft}
            onChange={(e) =>
              useTextStore.setState({ textFrontLeft: e.target.value })
            }
            maxLength={13}
            onFocus={() => setFocus("frontLeft")}
          />
          <label> Front Right</label>
          <input
            type='text'
            placeholder='Front Right'
            value={textFrontRight}
            onChange={(e) =>
              useTextStore.setState({ textFrontRight: e.target.value })
            }
            max={13}
            maxLength={13}
            onFocus={() => setFocus("frontRight")}
          />
          <label>Back</label>
          <input
            type='text'
            placeholder='Back'
            value={textBack}
            onChange={(e) =>
              useTextStore.setState({ textBack: e.target.value })
            }
            maxLength={30}
            onFocus={() => setFocus("back")}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
