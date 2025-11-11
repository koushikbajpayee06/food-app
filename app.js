import React from "react";
import ReactDOM from "react-dom/client"

// React Element
const Title = ()=> (
    <h1 id="heading" className="head">
        This is heading using 🚀
    </h1>
);

// React Functional Component
const HeadingComponent = () => (
    <div id="container">
        <Title/>
        <h1 className="heading">React Functional Component</h1>
   </div>
);




const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HeadingComponent/>);
