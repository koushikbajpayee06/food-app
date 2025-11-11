import React from "react";
import ReactDOM from "react-dom/client"

const heading = React.createElement("h1",{id:"heading"},"This is react from cdn");
console.log(heading)

//JSX
    const jsxHeading = <h1 id="heading">This is heading using 🚀</h1>
    console.log(jsxHeading)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(jsxHeading);
