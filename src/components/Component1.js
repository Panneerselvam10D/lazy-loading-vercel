import React from "react";

function Component1() {
  return (
    <>
      component
      <ul>
        {[...Array.from(Array(100000).keys())].map((key) => (
          <li key={key}>{key}</li>
        ))}
      </ul>
    </>
  );
}

export default Component1;
