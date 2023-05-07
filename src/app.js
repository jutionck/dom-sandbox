import React from "react";
import { createRoot } from "react-dom/client";

const heading1 = React.createElement("h1", {
  children: "Biodata Perusahaan",
  className: "heading-1",
});
const heading2 = React.createElement("h2", {
  children: "PT Enigma Cipta Humanika",
});

const element = React.createElement(React.Fragment, {
  children: [heading1, heading2],
});

const root = createRoot(document.getElementById("root"));

root.render(element);
