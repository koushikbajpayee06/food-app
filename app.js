import React from "react";
import ReactDOM from "react-dom/client"

// JSX (transpiled before it reaches the JS) - PARCEL - Babel

// JSX =>Babel Transpiles to  React.createElement => ReactElement-JS Object - HTMLElement(render)

const jsxHeading = (<h1 id="heading" className="head">
    This is heading using 🚀
    </h1>
    ;)
console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(jsxHeading);
