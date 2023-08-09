import "./App.css";
import React, { Suspense } from "react";

const Component = React.lazy(() => import("./components/Component1"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>loading...</div>}>
        <Component />
      </Suspense>
    </div>
  );
}

export default App;
