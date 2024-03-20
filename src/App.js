import React from "react";
import "./App.scss";
import Main from "./containers/Main";
import Hotjar from '@hotjar/browser';

const siteId = 3913468;
const hotjarVersion = 6;

Hotjar.init(siteId, hotjarVersion);
function App() {
  return (
    <div>
      <Main />
    </div>
  );
}

export default App;
