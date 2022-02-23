import "./App.css";
import React, { useState } from "react";

function App() {
  const [hide, setHide] = useState(true);

  const hider = () => {
    setHide((prev) => !prev);
  };
  return (
    <div className="App" >
      {hide ? (
        <div className="card" onClick={hider}>
          <div className="question">Why park a domain name in a Parkname ?</div>
          <div className="openArrow"></div>
        </div>
      ) : (
        <>
          <div className="card" onClick={hider}>
            <div className="question">Why park a domain name in a Parkname ?</div>
            <div className="closeArrow"></div>
          </div>
          <p className="answer">
            Parkname is the leanding industry standard for domain name parking
            and monetization services. We offer a wide virety of services to
            help you achieve success.
          </p>
        </>
      )}
    </div>
  );
}

export default App;
