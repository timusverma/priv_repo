import React from "react";
import "./styles.css";
import "./components/MainRenderComponent";
import MainRenderComponent from "./components/MainRenderComponent";

export default function App() {
  return (
    <div className="App">
      {/* <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
       */}
      <header>
        <div class="container">
          <div id="branding">
            <h1>Carousel</h1>
          </div>
          {/* <nav>
            <ul>
              <li>
                <a href="home.html">Home</a>
              </li>
              <li>
                <a href="about.html">About</a>
              </li>
            </ul>
          </nav> */}
        </div>
      </header>
      <section>
        <div class="container">
          <h1> Here's a sample carousel</h1>
          <MainRenderComponent />
        </div>
      </section>
      <footer>
        <p> carousel@Sumit--- &copy;2020 </p>
      </footer>
      {/* <MainRenderComponent /> */}
    </div>
  );
}
