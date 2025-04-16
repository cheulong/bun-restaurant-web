import "./App.css";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import { useEffect, useState } from "react";

function App() {
  const [version, setVersion] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/version")
      .then((response) => response.json())
      // 4. Setting *dogImage* to the image url that we received from the response above
      .then((data) => setVersion(data.msg));
  }, []);

  return (
    <div className="App">
      <div className="tag">Beta {version}</div>
      <Home />
      <Footer />
    </div>
  );
}

export default App;
