import { useEffect, useState } from "react";
import "./App.css";

import resources from "./resources/countryData.json";

function App() {
  const [value, setValue] = useState("");

  const [data, setData] = useState([]);

  const handleData = (query) => {
    if (!query || query === "") return;
    if (query) {
      let filteredData = resources.filter((item) => {
        return (
          item.name.toLowerCase().includes(query.toLowerCase()) ||
          item.code.toLowerCase().includes(query.toLowerCase())
        );
      });
      setData(filteredData);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.code == "Escape") {
        setData([]);
      }
    });
  });

  console.log(data);
  return (
    <>
      <h1>Search</h1>
      <div>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={() => handleData(value)}>Search</button>
      </div>
      <div className="containerList">
        {data.map((ele, idx) => {
          return (
            <div key={idx} className="list">
              <p>{ele.name}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
