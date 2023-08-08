import React from "react";
import "../styles/SimplifyPage.css";

function SimplifyPage() {
  return (
    <div className="App">
      <header className="App-header">
        <div
          className="logo-container"
          style={{ position: "absolute", top: "20px", left: "20px" }}
        >
          {/* <img src="logo.png" alt="logo-here" className="logo" />
           */}
          Logo
        </div>
      </header>
      <div className="ba">
        <button>Back</button>
      </div>
      <div className="content">
        <h4 className="header">Click on simplify to separate it to lines</h4>
        <div className="data">
          <p>
            Lorem ipsum dolor sit amet consectetur. Dictum diam nisl pretium sit
            vel cras. Et erat at vitae auctor tempus. Nec condimentum
            ullamcorper pulvinar massa. Senectus id odio posuere fames sit.
            Vitae nisl mollis amet felis nec quisque sit. Ullamcorper ipsum sed
            lobortis aliquam in mus sed et ac. Aenean mattis vel id at ultricies
            egestas odio. Massa gravida lorem elit ultrices. Risus lectus eget
            duis amet habitasse risus id. Tortor lacus lectus nunc pulvinar
            ligula tristique. Lectus porta leo duis sapien elementum risus eget
            commodo. Tortor laoreet elit neque nisl mauris praesent non. Id
            nulla est risus feugiat eget nisi tempus potenti. Sed cursus quis
            consectetur sit massa ac.
          </p>
        </div>
      </div>
      <button className="simplify">Simplify</button>
    </div>
  );
}

export default SimplifyPage;
