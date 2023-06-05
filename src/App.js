import { useEffect, useState } from "react"
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Header from "./components/Header";

function App() {
  const [ currPage, setCurrPage ] = useState("home")
  const [ prefix, setPrefix ] = useState("")

  useEffect(() => {
    if( process.env.NODE_ENV === "production" ){
      setPrefix("/react-github-norouter")
    }
  }, [process.env.NODE_ENV])

  useEffect(() => {
    const path = window.location.href.split(window.location.host)[1]
    console.log(path)
    setCurrPage(path)
  }, [window.location.href])

  return (
    <div className="App">
      <Header prefix={prefix} />

      { currPage === `${prefix}/` && <Home /> }
      { currPage === `${prefix}/about` && <About /> }
      { currPage === `${prefix}/contact` && <Contact /> }
    </div>
  );
}

export default App;
