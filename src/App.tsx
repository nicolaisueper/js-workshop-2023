import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Counter } from "./Counter.tsx";
import { SouthParkAPIResponse } from "./types.ts";

const uri = `https://spapi.dev/api/characters`;

function App() {
  const [count, setCount] = useState(0);
  const [spData, setSPData] = useState<SouthParkAPIResponse | undefined>(
    undefined,
  );

  function fetchData(uri?: string) {
    if (!uri) return;

    fetch(uri, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          console.warn(`Request ging nicht durch. Code: ${response.status}.`);
          console.warn(response);
        } else {
          return response.json();
        }
      })
      .then((data) => {
        setSPData(data);
        console.log(data);
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    fetchData(uri);
  }, []);

  useEffect(() => {
    console.log(count);
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Counter count={count} increment={() => setCount(count + 1)} />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {spData?.data?.length && (
        <ol>
          {spData.data.map((char) => (
            <li key={char.id}>{char.name}</li>
          ))}
        </ol>
      )}
      <div>
        <button
          disabled={!spData?.links?.prev}
          onClick={() => fetchData(spData?.links?.prev)}
        >
          Previous Page
        </button>
        <button
          disabled={!spData?.links?.next}
          onClick={() => fetchData(spData?.links?.next)}
        >
          Next Page
        </button>
      </div>
    </>
  );
}

export default App;
