import { useEffect, useState } from "react"
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

function App() {
  const [ currPage, setCurrPage ] = useState("home")

  useEffect(() => {
    const path = window.location.href.split(window.location.host)[1]
    console.log(path)
  }, [window.location.href])

  return (
    <div className="App">
      <p>Here is the main app page</p>
    </div>
  );
}

export default App;
