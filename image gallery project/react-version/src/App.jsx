import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex min-h-screen items-center justify-center">
        <h1 className="text-blue-300">hello world</h1>
      </div>
    </>
  );
}

export default App;
