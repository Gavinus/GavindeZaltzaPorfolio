// import ReactDOM from "react-dom";
import ReactDOM from "react-dom/client";
import React, { Suspense } from "react";
import App from "./App";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

ReactDOM.createRoot(document.getElementById("root")).render(
  <Suspense fallback={null}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    ,
  </Suspense>
);
